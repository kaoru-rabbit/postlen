import type { Platform } from "@/lib/counters";
import { platforms } from "@/lib/counters";
import { useDictionary } from "@/lib/i18n";

function VideoPlayer({ src, className }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      controls
      muted
      playsInline
      className={`w-full object-cover ${className ?? ""}`}
    />
  );
}

function ImageGrid1({ images }: { images: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
      <img src={images[0]} alt="Post image" className="w-full aspect-video object-cover" />
    </div>
  );
}

function XImageGrid({ images }: { images: string[] }) {
  if (images.length === 1) return <ImageGrid1 images={images} />;

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
        {images.map((url, i) => (
          <img key={url} src={url} alt={`Image ${i + 1}`} className="w-full aspect-[7/8] object-cover" />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700" style={{ aspectRatio: "16/9" }}>
        <img src={images[0]} alt="Image 1" className="w-full h-full object-cover row-span-2" style={{ gridRow: "1 / 3" }} />
        <img src={images[1]} alt="Image 2" className="w-full h-full object-cover" />
        <img src={images[2]} alt="Image 3" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700" style={{ aspectRatio: "16/9" }}>
      {images.map((url, i) => (
        <img key={url} src={url} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
      ))}
    </div>
  );
}

function InstagramCarousel({ images }: { images: string[] }) {
  return (
    <div className="relative">
      <img src={images[0]} alt="Post image" className="w-full aspect-square object-cover" />
      {images.length > 1 && (
        <>
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
            1/{images.length}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-blue-500" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function LinkedInImageGrid({ images }: { images: string[] }) {
  if (images.length === 1) {
    return (
      <div className="-mx-4 -mb-4 overflow-hidden rounded-b-xl">
        <img src={images[0]} alt="Post image" className="w-full aspect-[1.91/1] object-cover" />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="-mx-4 -mb-4 grid grid-cols-2 gap-0.5 overflow-hidden rounded-b-xl">
        {images.map((url, i) => (
          <img key={url} src={url} alt={`Image ${i + 1}`} className="w-full aspect-square object-cover" />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="-mx-4 -mb-4 overflow-hidden rounded-b-xl">
        <img src={images[0]} alt="Image 1" className="w-full aspect-[2/1] object-cover" />
        <div className="grid grid-cols-2 gap-0.5 mt-0.5">
          <img src={images[1]} alt="Image 2" className="w-full aspect-[2/1] object-cover" />
          <img src={images[2]} alt="Image 3" className="w-full aspect-[2/1] object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="-mx-4 -mb-4 grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-b-xl">
      {images.map((url, i) => (
        <img key={url} src={url} alt={`Image ${i + 1}`} className="w-full aspect-square object-cover" />
      ))}
    </div>
  );
}

function ThreadsImageGrid({ images }: { images: string[] }) {
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
        <img src={images[0]} alt="Post image" className="w-full aspect-[4/5] object-cover" />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
      <img src={images[0]} alt="Post image" className="w-full aspect-[4/5] object-cover" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

function GenericImageGrid({ images }: { images: string[] }) {
  if (images.length === 1) {
    return (
      <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
        <img src={images[0]} alt="Preview" className="w-full aspect-video object-cover" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
      {images.map((url, i) => (
        <img key={url} src={url} alt={`Image ${i + 1}`} className="w-full aspect-video object-cover" />
      ))}
    </div>
  );
}

type MediaProps = { text: string; images: string[]; video: string | null };

function MediaBlock({ video, images, ImageGrid, videoClass }: {
  video: string | null;
  images: string[];
  ImageGrid: React.ComponentType<{ images: string[] }>;
  videoClass?: string;
}) {
  if (video) {
    return (
      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700">
        <VideoPlayer src={video} className={videoClass} />
      </div>
    );
  }
  if (images.length > 0) return <ImageGrid images={images} />;
  return null;
}

function XPreview({ text, images, video }: MediaProps) {
  const dict = useDictionary();
  const media = <MediaBlock video={video} images={images} ImageGrid={XImageGrid} videoClass="aspect-video" />;
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
      <div className="flex gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {dict.preview.yourName}
            </span>
            <span className="text-sm text-zinc-500">@{dict.preview.username} · {dict.preview.now}</span>
          </div>
          <p className="mt-1 text-[15px] leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap break-words">
            {text || dict.preview.xPlaceholder}
          </p>
          {media && <div className="mt-3">{media}</div>}
        </div>
      </div>
    </div>
  );
}

function InstagramPreview({ text, images, video }: MediaProps) {
  const dict = useDictionary();
  const hasMedia = images.length > 0 || video;
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden">
      <div className="flex items-center gap-2.5 px-4 py-3">
        <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.preview.username}
        </span>
      </div>
      {video ? (
        <VideoPlayer src={video} className="aspect-square" />
      ) : images.length > 0 ? (
        <InstagramCarousel images={images} />
      ) : (
        <div className="w-full aspect-square bg-zinc-200 dark:bg-zinc-700" />
      )}
      <div className="p-4">
        <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap break-words">
          <span className="font-semibold">{dict.preview.username}</span>{" "}
          {text || dict.preview.instagramPlaceholder}
        </p>
      </div>
    </div>
  );
}

function LinkedInPreview({ text, images, video }: MediaProps) {
  const dict = useDictionary();
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-12 w-12 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {dict.preview.yourName}
          </div>
          <div className="text-xs text-zinc-500">{dict.preview.headline} · {dict.preview.timeAgo}</div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap break-words">
        {text || dict.preview.linkedinPlaceholder}
      </p>
      {video ? (
        <div className="-mx-4 -mb-4 mt-3 overflow-hidden rounded-b-xl">
          <VideoPlayer src={video} className="aspect-video" />
        </div>
      ) : images.length > 0 ? (
        <div className="mt-3">
          <LinkedInImageGrid images={images} />
        </div>
      ) : null}
    </div>
  );
}

function ThreadsPreview({ text, images, video }: MediaProps) {
  const dict = useDictionary();
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
      <div className="flex gap-3">
        <div className="h-9 w-9 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {dict.preview.username}
            </span>
            <span className="text-xs text-zinc-500">{dict.preview.timeAgo}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap break-words">
            {text || dict.preview.threadsPlaceholder}
          </p>
          {video ? (
            <div className="mt-2 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
              <VideoPlayer src={video} className="aspect-[4/5]" />
            </div>
          ) : images.length > 0 ? (
            <div className="mt-2">
              <ThreadsImageGrid images={images} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function GenericPreview({
  text,
  images,
  video,
  platform,
}: MediaProps & { platform: Platform }) {
  const dict = useDictionary();
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-4">
      <div className="mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
        {dict.preview.previewLabel.replace("{platform}", platform.name)}
      </div>
      <p className="text-sm leading-relaxed text-zinc-900 dark:text-zinc-100 whitespace-pre-wrap break-words">
        {text || dict.preview.genericPlaceholder.replace("{platform}", platform.name)}
      </p>
      {video ? (
        <div className="mt-3 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
          <VideoPlayer src={video} className="aspect-video" />
        </div>
      ) : images.length > 0 ? (
        <div className="mt-3">
          <GenericImageGrid images={images} />
        </div>
      ) : null}
    </div>
  );
}

export function Preview({
  text,
  images,
  video,
  platformId,
}: {
  text: string;
  images: string[];
  video: string | null;
  platformId: string;
}) {
  const platform = platforms.find((p) => p.id === platformId)!;
  switch (platformId) {
    case "x":
      return <XPreview text={text} images={images} video={video} />;
    case "instagram":
      return <InstagramPreview text={text} images={images} video={video} />;
    case "linkedin":
      return <LinkedInPreview text={text} images={images} video={video} />;
    case "threads":
      return <ThreadsPreview text={text} images={images} video={video} />;
    default:
      return <GenericPreview text={text} images={images} video={video} platform={platform} />;
  }
}
