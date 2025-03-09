import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet"; // ✅ Import proper type
import "leaflet/dist/leaflet.css";

interface GoogleMapProps {
  center?: LatLngExpression; // ✅ Type the center correctly
  zoom?: number;
}

function GoogleMap({ center = [51.505, -0.09], zoom = 13 }: GoogleMapProps) {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mx-auto max-w-8xl px-4 my-11">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg shadow-lg"
        attributionControl={false} // ✅ Prevents unnecessary error
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default GoogleMap;

