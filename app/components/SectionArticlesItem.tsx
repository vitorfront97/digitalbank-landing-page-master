import Image from "next/image";

interface SectionArticlesProps {
  src: string;
  alt: string;
  author: string;
  title: string;
  children: React.ReactNode;
};

export default function SectionArticlesItem({src, alt, author, title, children}: SectionArticlesProps) {
  return (
    <article className="flex flex-col items-center gap-6">
      <Image
        className="w-full h-auto aspect-video object-cover"
        src={src}
        width={375}
        height={0}
        alt={alt}
      />
      <div className="px-8 flex flex-col gap-2 xl:px-2">
        <span className="text-[12px]/4 text-this-gray-600">
          By {author}
        </span>
        <h4 className="leading-5">
          <a className="hover:text-this-green-500" href="/#">{title}</a>
        </h4>
        <p className="text-[14px]/4 text-this-gray-600">
          {children}
        </p>
      </div>
    </article>
  );
}
