"use client"; // Mark this as a Client Component

import { Suspense, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
import { auctions } from "@/data/mockAuctionData";
import AuctionMap from "@/components/auction/auction-map";

export default function AuctionDetailsPage() {
  const params = useParams<{ id: string }>();
  // const [loading, setLoading] = useState(true);

  const auction = useMemo(
    () => auctions.find((a) => a.id === Number(params.id)) || null,
    [params.id]
  );
  // Fetch auction details on component mount

  // useEffect(() => {
  //   if (params.id) {
  //     fetch(`/api/auctions/${params.id}`) // Replace with your API endpoint
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAuction(data);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Failed to fetch auction details:", error);
  //         setLoading(false);
  //       });
  //   }
  // }, [params.id]);

  // if (loading) {
  //   return (
  //     <div className="container mx-auto px-4 py-8 mb-12">
  //       <Skeleton className="w-full h-12 mb-8" />
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
  //         <Skeleton className="w-full h-[400px]" />
  //         <div>
  //           <Skeleton className="w-full h-8 mb-4" />
  //           <Skeleton className="w-full h-6 mb-2" />
  //           <Skeleton className="w-full h-6 mb-2" />
  //           <Skeleton className="w-full h-6 mb-4" />
  //           <div className="flex gap-4">
  //             <Skeleton className="w-24 h-10" />
  //             <Skeleton className="w-24 h-10" />
  //           </div>
  //         </div>
  //       </div>
  //       <Skeleton className="w-full h-[400px]" />
  //     </div>
  //   );
  // }

  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-8 mb-12">
        <h1 className="text-4xl font-bold mb-8">~Leilão não encontrado</h1>
        <Link href="/" passHref>
          <Button>Voltar para Lista</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <h1 className="text-4xl font-bold mb-8">{auction.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={auction.image || "/placeholder.svg"}
            alt={auction.title}
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">
            Lance Atual: R$ {auction.currentBid.toLocaleString()}
          </p>
          <p className="mb-2">
            Encerra em: {new Date(auction.endTime).toLocaleDateString()}
          </p>
          <p className="mb-2">Localização: {auction.location}</p>
          <p className="mb-2">Leiloeiro: {auction.title}</p>
          <p className="mb-4">{auction.title}</p>
          <div className="flex gap-4">
            <Button className="bg-[var(--primary)] text-white font-bold">
              Fazer Lance
            </Button>
            <Link href="/" passHref>
              <Button>Voltar para Lista</Button>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Localização do Leilão</h2>
      <AuctionMap auctions={[auction]} />
    </div>
  );
}
