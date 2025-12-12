import Image from "next/image";

interface articleProps {
  src: string;
  title: string;
  children: React.ReactNode;
  alt: string;
}

export default function SectionArticle({src, title, children, alt}: articleProps) {
  return (
    <article className="flex flex-col items-center gap-6 xl:items-start">
      <Image
        className="w-auto h-auto"
        src={src}
        width={0}
        height={0}
        alt={alt}
      />
      <h3 className="text-this-blue-950 text-2xl">{title}</h3>
      <p className="text-[14px]/4 text-this-gray-600">{children}</p>
    </article>
  );
}
