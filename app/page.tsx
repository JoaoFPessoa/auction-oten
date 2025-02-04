import { Suspense } from "react";
import AuctionList from "@/components/auction/auction-list";
import SearchFilter from "@/components/search-filter";
import { Skeleton } from "@/components/ui/skeleton";
import AuctionMap from "@/components/auction/auction-map";
import { auctions } from "./data/mockAuctionData";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SearchFilter />
      <Suspense fallback={<Skeleton className="w-full h-96" />}>
        <AuctionList auctions={auctions} />
      </Suspense>
      <h2 className="text-2xl font-bold mt-12 mb-4">Mapa de Leilões</h2>
      <AuctionMap auctions={auctions} />
    </main>
  );
}
