import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AuctionMap from "@/components/auction/auction-map";
import { auctions } from "@/app/data/mockAuctionData";

// Simule uma função para buscar os detalhes do leilão
async function getAuctionDetails(id: number) {
  const auction = auctions.find((a) => a.id === id);
  if (!auction) {
    notFound();
  }
  return auction;
}

export default async function AuctionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const auction = await getAuctionDetails(Number(params.id));
  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <h1 className="text-4xl font-bold mb-8">{auction.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <Suspense fallback={<Skeleton className="w-full h-[400px]" />}>
            <Image
              src={auction.image || "/placeholder.svg"}
              alt={auction.title}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </Suspense>
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
