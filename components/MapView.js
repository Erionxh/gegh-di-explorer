'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

export default function MapView({ points, layers, lang }) {
  const color = Object.fromEntries(layers.map((l) => [l.id, l.color]));
  return (
    <MapContainer center={[41.0, 18.0]} zoom={6} scrollWheelZoom={false} style={{ height: 520, width: '100%', borderRadius: 14 }}>
      <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {points.map((p, i) => (
        <CircleMarker key={i} center={[p.lat, p.lng]} radius={9} pathOptions={{ color: '#fff', weight: 2, fillColor: color[p.layer], fillOpacity: 0.9 }}>
          <Popup><strong>{p.place}</strong><br />{lang === 'en' ? p.en : p.sq}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
