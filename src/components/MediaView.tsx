import Image from "next/image";
import LoopVideo from "./LoopVideo";
import type { Media } from "@/lib/content";

/** Renders a Media entry as an optimized image or a lazy looping video. */
export default function MediaView({
  media,
  sizes = "(min-width:1024px) 50vw, 100vw",
  priority = false,
  className = "",
}: {
  media: Media;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (media.kind === "video") {
    return (
      <LoopVideo
        src={media.src}
        poster={media.poster}
        label={media.alt}
        priority={priority}
        className={className}
      />
    );
  }
  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
