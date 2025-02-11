import { Suspense } from "react";
import SearchFilter from "@/components/search-filter";
import { Skeleton } from "@/components/ui/skeleton";
import { propertyData } from "@/data/mockAuctionData";
import AuctionList from "@/components/auction/auction-list";
import { processPropertyData } from "@/lib/utils";

export default function AuctionsPage() {
  const data = propertyData.map((data) => processPropertyData(data));
  return (
    <div className="container mx-auto px-4 py-8 mt-4 mb-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Leilões Disponíveis
      </h1>
      <SearchFilter />
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <AuctionList auctions={data} />
      </Suspense>
      {/*
      <h2 className="text-2xl font-bold mt-12 mb-4">Mapa de Leilões</h2>
       <AuctionMap auctions={data} /> */}
    </div>
  );
}
