"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { useDictionary } from "@/lib/i18n";

const MAX_IMAGES = 4;

export function MediaUpload({
  images,
  video,
  onImagesAdd,
  onImageRemove,
  onVideoAdd,
  onMediaClear,
}: {
  images: string[];
  video: string | null;
  onImagesAdd: (files: File[]) => void;
  onImageRemove: (index: number) => void;
  onVideoAdd: (file: File) => void;
  onMediaClear: () => void;
}) {
  const dict = useDictionary();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const remaining = MAX_IMAGES - images.length;
  const hasMedia = images.length > 0 || video !== null;

  function processFiles(fileList: File[]) {
    const videoFile = fileList.find((f) => f.type.startsWith("video/"));
    if (videoFile) {
      onVideoAdd(videoFile);
      return;
    }
    const imageFiles = fileList
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, video ? MAX_IMAGES : remaining);
    if (imageFiles.length > 0) onImagesAdd(imageFiles);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    processFiles(Array.from(e.dataTransfer.files));
  }

  function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
    processFiles(Array.from(e.target.files || []));
    e.target.value = "";
  }

  return (
    <div className="mt-3">
      {video && (
        <div className="flex items-center gap-2 mb-2">
          <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 group">
            <video src={video} className="h-full w-full object-cover" muted />
            <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] px-1 rounded">
              {dict.media.video}
            </div>
          </div>
          <button
            onClick={onMediaClear}
            className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
          >
            {dict.media.clear}
          </button>
        </div>
      )}

      {images.length > 0 && (
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-2 flex-1 overflow-x-auto">
            {images.map((url, i) => (
              <div key={url} className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700 group">
                <img src={url} alt={`Image ${i + 1}`} className="h-full w-full object-cover" />
                <button
                  onClick={() => onImageRemove(i)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-zinc-400">{images.length}/{MAX_IMAGES}</span>
            <button
              onClick={onMediaClear}
              className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
            >
              {dict.media.clear}
            </button>
          </div>
        </div>
      )}

      {!video && remaining > 0 && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex cursor-pointer items-center justify-center rounded-xl border border-dashed p-4 transition-colors ${
            dragging
              ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
              : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          <span className="text-sm text-zinc-400">
            {!hasMedia
              ? dict.media.dropzone
              : `${dict.media.addMore} (${remaining}${dict.media.remaining})`}
          </span>
        </div>
      )}
    </div>
  );
}
