"use client";

import { useState } from "react";
import AuctionCard from "./auction-card";
import BidModal from "@/components/bid-modal";
import { PropertyData } from "@/types/auction";

export default function AuctionList({
  auctions,
}: {
  auctions: PropertyData[];
}) {
  const [selectedAuction, setSelectedAuction] = useState<PropertyData | null>(
    null
  );

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <AuctionCard
          key={auction.id}
          auction={auction}
          onBid={() => setSelectedAuction(auction)}
        />
      ))}
      {selectedAuction && (
        <BidModal
          auction={selectedAuction}
          onClose={() => setSelectedAuction(null)}
        />
      )}
    </div>
  );
}
