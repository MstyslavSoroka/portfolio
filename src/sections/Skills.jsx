import Header from './Header';
import {
  SiReact,
  SiReactHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss,
  SiCssHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiJavascript,
  SiJavascriptHex,
  SiGit,
  SiGitHex,
  SiLinux,
  SiLinuxHex,
} from '@icons-pack/react-simple-icons';

function Skills() {
  const skills = [
    { Icon: SiReact },
    { Icon: SiHtml5 },
    { Icon: SiCss },
    { Icon: SiTailwindcss },
    { Icon: SiJavascript },
    { Icon: SiGit },
    { Icon: SiLinux },
  ];
  return (
    <>
      <section className="bg-zinc-950">
        {skills.map(({ Icon }, i) => (
          <Icon key={i} className="fill-zinc-200" />
        ))}
      </section>
    </>
  );
}

export default Skills;
