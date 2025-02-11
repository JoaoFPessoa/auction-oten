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
import { PropertyData } from "@/types/auction";

export default function AuctionCard({
  auction,
  onBid,
}: {
  auction: PropertyData;
  onBid: () => void;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{auction.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={auction.image_url || "/placeholder.svg"}
          alt={auction.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <p className="text-lg font-semibold">
          Valor de avaliação: R${" "}
          {auction.appraisal_value.toLocaleString("pt-BR")}
        </p>
        <p>
          Valor mínimo de venda: R${" "}
          {auction.minimum_value.toLocaleString("pt-BR")}
        </p>
        <p>
          Localização: {auction.address.street}, {auction.address.number}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"primary"} onClick={onBid}>
          Fazer Lance
        </Button>
        <Link href={`/leilao/${auction.id}`} passHref>
          <Button>Mais Detalhes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
