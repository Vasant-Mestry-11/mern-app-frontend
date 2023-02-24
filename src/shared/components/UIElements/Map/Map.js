import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

const Map = ({ center, zoom }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={center}
        icon={
          new L.icon({
            iconUrl:
              "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
            iconSize: [30, 41],
            iconAnchor: [13, 0],
          })
        }
      ></Marker>
    </MapContainer>
  );
};

export default Map;
