import { useRef } from 'react';
import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function MapComponent() {
  const mapRef = useRef(null);

  return (
    <div className="w-full border-1 border-zinc-800 rounded-2xl overflow-hidden">
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
          borderRadius: '16px 16px 0 0',
          width: '100%',
          height: '400px',
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      />
      <div className="flex flex-wrap justify-between p-4 gap-5 items-center font-jetbrains text-zinc-200 bg-zinc-900 rounded-b-2xl">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5">
            <use href="#icon-location" className="fill-zinc-200"></use>
          </svg>
          <p>ABERDEEN,SCOTLAND</p>
        </div>

        <div className="sm:flex gap-5 flex-wrap">
          <p>LONGITUDE: -2.09</p>
          <p>LATITUDE: 57.15</p>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
