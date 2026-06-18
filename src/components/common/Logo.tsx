import { images } from '../../data/images';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = 'h-10 w-auto object-contain' }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="Plan B"
      className={className}
      width={160}
      height={48}
    />
  );
}