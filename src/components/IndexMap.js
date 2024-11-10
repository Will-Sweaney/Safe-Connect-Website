import React, { useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

const waypointIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1076/1076983.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const Route = () => {
  const map = useMap();

  useEffect(() => {
    const start = [51.505, -0.09];
    const end = [51.515, -0.1];

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start),
        L.latLng(end)
      ],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }]
      },
      createMarker: (i, waypoint, n) => {
        const icon = waypointIcon;
        return L.marker(waypoint.latLng, { icon, draggable: true });
      }
    }).addTo(map);
  
    return () => {
      map.removeControl(routingControl);
    };
  }, [map]);

  return null;
};
const MapComponent = () => {
  const center = [51.505, -0.09];
  const zoom = 13;

  return (
    <MapContainer 
      center={center} 
      zoom={zoom} 
      zoomControl={false} 
      style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: "100%" }}
    >
      <TileLayer 
        url="http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ZoomControl position="bottomleft" />
      <Route />
    </MapContainer>
  );
};
  
export default MapComponent;