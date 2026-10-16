import Image, { type StaticImageData } from "next/image";

// Imagem dividida em faixas que entram em direções alternadas e se encaixam.
export function Strips({
  image,
  alt,
  count = 5,
  sizes,
  priority = false,
  className = "",
}: {
  image: StaticImageData;
  alt: string;
  count?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`strips ${className}`} role="img" aria-label={alt} data-reveal>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="strip" style={{ "--i": i, "--n": count } as React.CSSProperties}>
          <Image
            src={image}
            alt=""
            sizes={sizes}
            priority={priority && i === 0}
            placeholder="blur"
            style={{ width: `${count * 100}%`, left: `${-i * 100}%` }}
          />
        </div>
      ))}
    </div>
  );
}
