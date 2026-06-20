import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  priority?: boolean;
  featured?: boolean;
  className?: string;
}

export default function ProjectThumbnail({
  src,
  alt,
  priority = false,
  featured = false,
  className,
}: ProjectThumbnailProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md border border-slate/30 bg-[#d8dee8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]",
        featured ? "aspect-[4/3]" : "aspect-video",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        className="object-cover object-top transition duration-500 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}
