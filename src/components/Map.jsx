import { useRef } from 'react';
import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function MapComponent() {
  const mapRef = useRef(null);

  return (
    <Map
      ref={mapRef}
      onLoad={() =>
        mapRef.current?.flyTo({
          center: [-2.09, 57.15],
          zoom: 12,
          duration: 4000,
        })
      }
      attributionControl={false}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 12,
      }}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    />
  );
}

export default MapComponent;
