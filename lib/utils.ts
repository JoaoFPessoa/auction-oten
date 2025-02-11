import { PropertyData } from "@/types/auction";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

type RawPropertyData = {
  id: number;
  title: string;
  appraisal_value: string;
  minimum_value: string;
  address: string;
  image_url: string;
};

export function processPropertyData(rawData: RawPropertyData): PropertyData {
  // Validate rawData
  if (!rawData || typeof rawData !== "object") {
    throw new Error("Invalid rawData: Expected an object");
  }

  // Extract and clean the minimum value
  const minimumValueMatch = rawData.minimum_value.match(/R\$\s*([\d.,]+)/g);
  if (!minimumValueMatch || minimumValueMatch.length < 2) {
    throw new Error(
      "Invalid minimum_value format: Unable to extract minimum value"
    );
  }
  const minimumValueString = minimumValueMatch[1];
  const minimumValue = parseFloat(
    minimumValueString.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );
  if (isNaN(minimumValue)) {
    throw new Error("Invalid minimum_value: Could not convert to a number");
  }

  // Extract and clean the appraisal value
  const appraisalValueMatch = rawData.minimum_value.match(/R\$\s*([\d.,]+)/);
  if (!appraisalValueMatch || !appraisalValueMatch[1]) {
    throw new Error(
      "Invalid appraisal_value format: Unable to extract appraisal value"
    );
  }
  const appraisalValueString = appraisalValueMatch[1];
  const appraisalValue = parseFloat(
    appraisalValueString.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );
  if (isNaN(appraisalValue)) {
    throw new Error("Invalid appraisal_value: Could not convert to a number");
  }

  // Extract discount percentage (handle typos and extra spaces)
  const discountMatch = rawData.minimum_value.match(
    /descontr?o de (\d+,\d+)%/i
  );
  let discount = 0; // Default value if discount is not found
  if (discountMatch && discountMatch[1]) {
    discount = parseFloat(discountMatch[1].replace(",", "."));
    if (isNaN(discount)) {
      console.warn("Invalid discount value: Could not convert to a number");
      discount = 0; // Fallback to 0 if conversion fails
    }
  } else {
    console.warn("Discount percentage not found in minimum_value");
  }

  // Process address
  const addressParts = rawData.address.split("\n");
  if (addressParts.length < 4) {
    throw new Error("Invalid address format: Expected at least 4 parts");
  }

  // Extract street and number
  const streetLine = addressParts[2]; // e.g., "RUA 0, N. 4"
  const streetMatch = streetLine.match(/^(.*?), N\.\s*(\d+)/);
  const street = streetMatch?.[1]?.trim() || "Unknown";
  const number = parseInt(streetMatch?.[2] || "0", 10);

  const address = {
    type: addressParts[0].split(" - ")[0] || "Unknown",
    bedrooms: parseInt(addressParts[0].match(/\d+/)?.[0] || "0", 10),
    garage_spots: parseInt(addressParts[0].match(/\d+/)?.[1] || "0", 10),
    property_number: addressParts[1].split(": ")[1] || "Unknown",
    street: street,
    number: number,
    expenses: addressParts[3].split(": ")[1] || "Unknown",
  };

  // Validate image URL
  if (!rawData.image_url || typeof rawData.image_url !== "string") {
    throw new Error("Invalid image_url: Expected a valid URL string");
  }

  // Return the processed data
  return {
    id: rawData.id,
    title: rawData.title || "Unknown",
    appraisal_value: appraisalValue,
    minimum_value: minimumValue,
    discount: discount,
    address: address,
    image_url: rawData.image_url,
  };
}
