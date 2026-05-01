import { useEffect, useRef, useState } from "preact/hooks";

export default function VideoModal(
  { src, poster }: { src: string; poster?: string },
) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // IMPORTANT: reset video every time modal opens
  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <div
        class="aspect-video rounded-lg overflow-hidden cursor-pointer relative"
        onClick={() => setOpen(true)}
      >
        {poster
          ? <img src={poster} class="w-full h-full object-cover" />
          : <video src={src} class="w-full h-full object-cover" />}

        <div class="absolute inset-0 flex items-center justify-center bg-black/40">
          <span class="text-white text-2xl">▶</span>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <video
            ref={videoRef}
            src={src}
            controls
            autoplay
            class="max-w-[90%] max-h-[90%] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
