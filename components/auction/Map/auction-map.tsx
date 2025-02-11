"use client";

import dynamic from "next/dynamic";
import { PropertyData } from "@/types/auction";
import { useEffect, useState } from "react";

const LeafletMap = dynamic(() => import("./map-client"), {
  ssr: false,
});

export default function AuctionMap({ auctions }: { auctions: PropertyData[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Loading map...</p>;

  return <LeafletMap auctions={auctions} />;
}
