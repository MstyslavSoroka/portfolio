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
  SiFigma,
} from '@icons-pack/react-simple-icons';

function Skills() {
  const skills = [
    { name: 'React', icon: SiReact, category: 'Front End' },
    { name: 'HTML5', icon: SiHtml5, category: 'Front End' },
    { name: 'CSS', icon: SiCss, category: 'Front End' },
    { name: 'Tailwind', icon: SiTailwindcss, category: 'Front End' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Front End' },

    { name: 'Git', icon: SiGit, category: 'Tools' },
    { name: 'GitHub', icon: SiGithub, category: 'Tools' },
    { name: 'Vite', icon: SiVite, category: 'Tools' },
    { name: 'Figma', icon: SiFigma, category: 'Tools' },

    { name: 'Linux', icon: SiLinux, category: 'OS' },
    { name: 'Arch Linux', icon: SiArchlinux, category: 'OS' },

    { name: 'Python', icon: SiPython, category: 'Back End' },
  ];
  return (
    <>
      <section className="bg-zinc-950 flex justify-center py-20">
        <div className="container px-5">
          <div className="overflow-hidden relative w-full mx-auto relative">
            <div className="pointer-events-none absolute left-0 top-0 w-[200px] h-full z-10 bg-gradient-to-r from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 w-[200px] h-full z-10 bg-gradient-to-l from-zinc-950 to-transparent" />
            <div className="flex animate-scroll w-[calc(250px*14)] hover:[animation-play-state:paused]">
              {[...skills, ...skills].map(({ icon: Icon, name }, i) => (
                <div
                  key={`${name}_${i}`}
                  className="flex items-center justify-center w-[250px]"
                >
                  <Icon className="w-15 h-15 fill-zinc-200" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap py-20 gap-10">
            <div className="flex border flex-wrap border-zinc-800 rounded-2xl py-5 px-5 gap-5 flex-col">
              <h2 className="text-zinc-200 font-jetbrains">Front End</h2>
              <div className="flex flex-wrap gap-5">
                {[...skills].map(({ icon: Icon, name, category }) => {
                  if (category === 'Front End') {
                    return <Icon className="w-10 h-10 fill-zinc-200" />;
                  }
                })}
              </div>
            </div>
            <div className="flex border flex-wrap border-zinc-800 rounded-2xl py-5 px-5 gap-5 flex-col">
              <h2 className="text-zinc-200 font-jetbrains">Tools</h2>
              <div className="flex flex-wrap gap-5">
                {[...skills].map(({ icon: Icon, name, category }) => {
                  if (category === 'Tools') {
                    return <Icon className="w-10 h-10 fill-zinc-200" />;
                  }
                })}
              </div>
            </div>
            <div className="flex border flex-wrap border-zinc-800 rounded-2xl py-5 px-5 gap-5 flex-col">
              <h2 className="text-zinc-200 font-jetbrains">OS</h2>
              <div className="flex flex-wrap gap-5">
                {[...skills].map(({ icon: Icon, name, category }) => {
                  if (category === 'OS') {
                    return <Icon className="w-10 h-10 fill-zinc-200" />;
                  }
                })}
              </div>
            </div>
            <div className="flex border flex-wrap border-zinc-800 rounded-2xl py-5 px-5 gap-5 flex-col">
              <h2 className="text-zinc-200 font-jetbrains">Back End</h2>
              <div className="flex flex-wrap gap-5">
                {[...skills].map(({ icon: Icon, name, category }) => {
                  if (category === 'Back End') {
                    return <Icon className="w-10 h-10 fill-zinc-200" />;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
