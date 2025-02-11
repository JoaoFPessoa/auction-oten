export type PropertyData = {
  id: number;
  title: string;
  appraisal_value: number;
  minimum_value: number;
  discount: number;
  address: {
    type: string;
    bedrooms: number;
    garage_spots: number;
    property_number: string;
    street: string;
    number: number;
    expenses: string;
  };
  image_url: string;
};
