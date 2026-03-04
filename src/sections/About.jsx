import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function AboutSection() {
  return (
    <>
      <section className="bg-zinc-800 text-zinc-200 flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-center gap-10">
          <div className="py-20 px-4 lg:container mx-auto">
            <h1 className="text-4xl font-bold text-5xl ">
              Hey, I'm{' '}
              <span className="bg-gradient-to-tl from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] bg-clip-text text-transparent pr-4  ">
                Mstyslav
              </span>
              <span className="inline-flex cursor-pointer  hover:animate-wiggle">
                👋
              </span>
            </h1>
            <p>Based in Aberdeen, Scotland</p>
          </div>
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

export default AboutSection;
