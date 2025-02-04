"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { Auction } from "@/types/auction";

// Fix Leaflet missing icon issue
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function AuctionMapClient({
  auctions,
}: {
  auctions: Auction[];
}) {
  const router = useRouter();

  return (
    <MapContainer
      center={[-23.4551841, -46.8807891]}
      zoom={5}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {auctions.map((auction) => (
        <Marker
          key={auction.id}
          position={[auction.latitude, auction.longitude]}
          eventHandlers={{
            click: () => {
              router.push(`/leilao/${auction.id}`);
            },
          }}
        >
          <Popup>
            <div>
              <h3>{auction.title}</h3>
              <p>Lance Atual: R$ {auction.currentBid.toLocaleString()}</p>
              <p>
                Encerra em: {new Date(auction.endTime).toLocaleDateString()}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
