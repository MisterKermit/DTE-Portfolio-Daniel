import { useState } from "preact/hooks";

export default function ImageModal({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        class="aspect-video rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          class="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      {/* Modal */}
      {open && (
        <div
          class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            class="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
          />
        </div>
      )}
    </>
  );
}
