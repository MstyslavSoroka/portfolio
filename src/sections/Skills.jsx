import {
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiLinux,
  SiArchlinux,
  SiGithub,
  SiVite,
  SiPython,
} from '@icons-pack/react-simple-icons';

function Skills() {
  const skills = [
    SiReact,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiJavascript,
    SiGit,
    SiLinux,
    SiArchlinux,
    SiGithub,
    SiVite,
    SiPython,
  ];
  return (
    <>
      <section className="bg-zinc-950 flex justify-center py-20">
        <div className="container px-5">
          <div className="overflow-hidden relative w-full mx-auto relative">
            <div className="pointer-events-none absolute left-0 top-0 w-[200px] h-full z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 w-[200px] h-full z-10 bg-gradient-to-l from-zinc-950 to-transparent" />
            <div className="flex animate-scroll w-[calc(250px*14)] hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((Icon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-[250px]"
                >
                  <Icon className="w-15 h-15 fill-zinc-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
