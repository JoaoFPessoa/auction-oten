"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { Auction } from "@/types/auction";

// Fix for default Leaflet icons missing in some environments
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function AuctionMap({ auctions }: { auctions: Auction[] }) {
  const router = useRouter();

  const greenIcon = L.icon({
    iconUrl: "/marker-icon.png", // Ensure this file exists in the public directory
    shadowUrl: "/leaf-shadow.png", // Ensure this file exists in the public directory
    iconSize: [38, 38], // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

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
          icon={greenIcon}
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
