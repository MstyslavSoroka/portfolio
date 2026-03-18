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
          <div className="flex gap-5">
            {skills.map((Icon, i) => (
              <Icon key={i} className="fill-zinc-200 w-10 h-10" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
