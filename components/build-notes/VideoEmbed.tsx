import { toEmbedUrl } from "@/lib/build-notes";

interface VideoEmbedProps {
  url: string;
  title: string;
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  const embedUrl = toEmbedUrl(url);

  return (
    <div className="aspect-video overflow-hidden rounded border border-slate/20 bg-light-navy/40">
      <iframe
        src={embedUrl}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
