import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function AboutSection() {
  return (
    <>
      <section className="bg-zinc-800 text-zinc-200">
        <div className="py-20 px-4 lg:container mx-auto">
          <h1 className="text-4xl font-bold">Hey, I'm Mstyslav</h1>
          <p>Based in Aberdeen, Scotland</p>
          <Map
            initialViewState={{
              longitude: -2.09,
              latitude: 57.15,
              zoom: 12,
            }}
            style={{
              width: '600px',
              height: '400px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            }}
            mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
          />
        </div>
      </section>
    </>
  );
}
1;

export default AboutSection;
