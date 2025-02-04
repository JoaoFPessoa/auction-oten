import { Suspense } from "react";
import AuctionList from "@/components/auction/auction-list";
import SearchFilter from "@/components/search-filter";
import { Skeleton } from "@/components/ui/skeleton";
import { auctions } from "../data/mockAuctionData";
import AuctionMap from "@/components/auction/auction-map";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SearchFilter />
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <AuctionList auctions={auctions} />
      </Suspense>
      <div className="max-w-7xl mx-auto h-[800px] relative mt-12 mb-4">
        <h2 className="text-2xl font-bold">Mapa de Leilões</h2>
        <AuctionMap auctions={auctions} />
      </div>
    </main>
  );
}
