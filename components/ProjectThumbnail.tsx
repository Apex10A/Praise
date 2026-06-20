import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectThumbnailProps {
  src: string;
  alt: string;
  priority?: boolean;
  featured?: boolean;
  variant?: "card" | "detail";
  className?: string;
}

export default function ProjectThumbnail({
  src,
  alt,
  priority = false,
  featured = false,
  variant = "card",
  className,
}: ProjectThumbnailProps) {
  const isDetail = variant === "detail";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[#d8dee8] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]",
        isDetail
          ? "aspect-[16/10] rounded-lg border border-slate/40 lg:aspect-[5/3]"
          : "rounded-md border border-slate/30",
        !isDetail && (featured ? "aspect-[4/3]" : "aspect-video"),
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={
          isDetail
            ? "(max-width: 1024px) 100vw, 55vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
        }
        className={cn(
          "transition duration-500 ease-out",
          isDetail
            ? "object-contain p-3 sm:p-4"
            : "object-cover object-top group-hover:scale-[1.03]"
        )}
      />
    </div>
  );
}
