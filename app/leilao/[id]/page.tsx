"use client"; // Mark this as a Client Component

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { propertyData } from "@/data/mockAuctionData";
import { processPropertyData } from "@/lib/utils";
import { PropertyData } from "@/types/auction";
import BidModal from "@/components/bid-modal";

export default function AuctionDetailsPage() {
  const params = useParams<{ id: string }>();
  const [auction, setAuction] = useState<PropertyData>();
  const [openBidModal, setOpenBidModal] = useState(false);

  // Find the auction based on the ID from the URL
  const data = useMemo(
    () => propertyData.find((a) => a.id === Number(params.id)) || null,
    [params.id]
  );

  useEffect(() => {
    if (data) setAuction(processPropertyData(data));
  }, [data]);

  // If the auction is not found, show a message
  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-8 mb-12">
        <h1 className="text-4xl font-bold mb-8">Leilão não encontrado</h1>
        <Link href="/leilao" passHref>
          <Button>Voltar para Lista</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <h1 className="text-4xl font-bold mb-8">{auction.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Image Section */}
        <div>
          <Image
            src={auction.image_url || "/placeholder.svg"}
            alt={auction.title}
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
          />
        </div>

        {/* Auction Details Section */}
        <div>
          <p className="text-2xl font-semibold mb-4">
            Valor de Avaliação: R${" "}
            {auction.appraisal_value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="text-2xl font-semibold mb-4">
            Valor Mínimo de Venda: R${" "}
            {auction.minimum_value.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          {/* Address Details */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Endereço:</h2>
            <p>Tipo: {auction.address.type}</p>
            <p>Quartos: {auction.address.bedrooms}</p>
            <p>Vagas na Garagem: {auction.address.garage_spots}</p>
            <p>Número do Imóvel: {auction.address.property_number}</p>
            <p>
              Rua: {auction.address.street}, Nº {auction.address.number}
            </p>
            <p>Despesas: {auction.address.expenses}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button variant={"primary"} onClick={() => setOpenBidModal(true)}>
              Fazer Lance
            </Button>
            <Link href="/leilao" passHref>
              <Button>Voltar para Lista</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* BID MODAL */}
      {openBidModal && (
        <BidModal auction={auction} onClose={() => setOpenBidModal(false)} />
      )}

      {/* Map Section */}
      {/* <h2 className="text-2xl font-bold mb-4">Localização do Imóvel</h2>
      <AuctionMap auctions={[auction]} /> */}
    </div>
  );
}
