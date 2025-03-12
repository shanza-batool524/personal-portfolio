import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet"; // ✅ Import proper type
import "leaflet/dist/leaflet.css";

interface GoogleMapProps {
  center?: LatLngExpression; // ✅ Type the center correctly
  zoom?: number;
}

function GoogleMap({ center = [33.586350, 73.088117], zoom = 13 }: GoogleMapProps) { 
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto max-w-8xl px-4 my-11">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg shadow-lg"
        attributionControl={false} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Ayub Colony No. 3, Chaklala Scheme 3, Rawalpindi</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default GoogleMap;
