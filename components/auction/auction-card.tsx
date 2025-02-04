import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Auction } from "@/types/auction";

export default function AuctionCard({
  auction,
  onBid,
}: {
  auction: Auction;
  onBid: () => void;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{auction.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={auction.image || "/placeholder.svg"}
          alt={auction.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-lg font-semibold">
          Lance Atual: R$ {auction.currentBid.toLocaleString("pt-BR")}
        </p>
        <p>
          Encerra em: {new Date(auction.endTime).toLocaleDateString("pt-BR")}
        </p>
        <p>Localização: {auction.location}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          className="bg-[var(--primary)] text-white font-bold"
          onClick={onBid}
        >
          Fazer Lance
        </Button>
        <Link href={`/leilao/${auction.id}`} passHref>
          <Button>Mais Detalhes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
