import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const center = [51.505, -0.09];
    const zoom = 13;
  
    return (
      <MapContainer center={center} zoom={zoom} style={{ height: "500px", width: "100px" }}>
        {/* TileLayer is the OSM tiles */}
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Example marker with popup */}
        <Marker position={center}>
          <Popup>
            A sample popup message.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
  
  export default MapComponent;