interface GalleryProps {
  items: { src: string; alt: string }[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section id="gallery" className="w-full py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {items.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-lg border">
              {/* Using native img to avoid configuring domains; can swap to next/image later */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-32 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


