import sprite from './assets/sprite.svg?raw';

export default function SvgSprite() {
  return <div aria-hidden dangerouslySetInnerHTML={{ __html: sprite }} />;
}
