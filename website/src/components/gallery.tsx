// import { useImagePreview } from "@/hooks/useImagePreview";
// import { useMemo, useRef } from "react";
// import { CircleX, ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';

// const photodumpImages = [
//     { src: "/photodump/atl_1.jpg", alt: "posted up wit the fam!" },
//     { src: "/photodump/atl_2.jpg", alt: "ootd @ inpo" },
//     { src: "/photodump/atl_3.jpg", alt: "inpo rotation 2 get-together!" },
//     { src: "/photodump/atl_4.jpg", alt: "me & lucas grinding! (CTO @ aayats)" },
//     { src: "/photodump/atl_5.jpg", alt: "me & lucas grinding! pt.2" },
//     { src: "/photodump/bang_1.jpg", alt: "anuj (prev. co-op @ inpo) drawing of our hangout!" },
//     { src: "/photodump/beach_1.jpg", alt: "prof. pics at techstars demo day for aayats" },
//     { src: "/photodump/birthday_1.jpg", alt: "work setup @ inpo" },
//     { src: "/photodump/bolder_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/charleston_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/chattanooga_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/chattanooga_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/dealership_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/fit_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/fl_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/food_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/food_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/food_3.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friendgrad_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friendgrad_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_3.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_4.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_5.png", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/friends_6.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/grad_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/hs_swim.png", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/lift_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/mn_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/mn_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/ny_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/ny_2.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/ny_3.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/ny_4.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/papaya_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/rave_1.jpg", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/swim_1.png", alt: "birthday vibes with the inpo crew!" },
//     { src: "/photodump/swim_2.jpg", alt: "birthday vibes with the inpo crew!" },
//   ];

// export function Gallery() {
//   const { openIndex, open, close, next, prev } = useImagePreview(photodumpImages.length);
//   const backdropRef = useRef<HTMLDivElement>(null);
//   const imageHandler = useMemo(() => photodumpImages.map((_, i) => () => open(i)), [open]);

//   const onBackdropClick = (e:React.MouseEvent) => {
//     if (e.target === backdropRef.current) close();
//   }

//   return (
//     <section className="py-12 px-4 sm:px-8 md:px-16 lg:py-24 lg:px-24 xl:py-32 xl:px-40 bg-white dark:bg-slate-800">
//       {/* Thumbnail grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
//         {photodumpImages.map((img, i) => (
//           <div
//             key={img.src}
//             className="aspect-4/2 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 will-change-transform"
//             onClick={imageHandler[i]}
//           >
//             <img src={img.src} alt={img.alt} width={400} height={200}
//               className="w-full h-full object-cover"
//               loading={i < 6 ? "eager" : "lazy"}
//               fetchPriority={i === 0 ? "high" : "auto"}
//               />
//           </div>
//         ))}
//       </div>

//       {/* Lightbox — rendered at the end, portaled in real apps */}
//       {openIndex !== null && (
//         <div
//           ref={backdropRef}
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//           onClick={onBackdropClick}
//         >
//           <button onClick={close} className="absolute top-4 right-4 ..."><CircleX color="white" size={20} /></button>
//           <button onClick={prev} className="absolute left-2 md:left-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><ArrowBigLeftDash color="white" size={28} /></button>
//           <button onClick={next} className="absolute right-2 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><ArrowBigRightDash color="white" size={28} /></button>

//           <img
//             src={photodumpImages[openIndex].src}
//             alt={photodumpImages[openIndex].alt}
//             className="max-h-[80vh] max-w-[calc(100vw-80px)] md:max-w-[85vw] object-contain rounded-xl"
//           />
//           <p className="absolute bottom-3 md:bottom-6 left-4 right-4 text-center text-white/70 text-xs md:text-sm truncate px-10">
//             {photodumpImages[openIndex].alt}
//           </p>
//         </div>
//       )}
//     </section>
//   );
// }

import { useImagePreview } from "@/hooks/useImagePreview";
import { useRef, useMemo } from "react";
import { CircleX, ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";

const photodumpImages = [
    { src: "/photodump/atl_1.jpg", alt: "posted up wit the fam!" },
    { src: "/photodump/atl_2.jpg", alt: "ootd @ inpo" },
    { src: "/photodump/atl_3.jpg", alt: "inpo rotation 2 get-together!" },
    { src: "/photodump/atl_4.jpg", alt: "me & lucas grinding! (CTO @ aayats)" },
    { src: "/photodump/atl_5.jpg", alt: "me & lucas grinding! pt.2" },
    { src: "/photodump/bang_1.jpg", alt: "anuj (prev. co-op @ inpo) drawing of our hangout!" },
    { src: "/photodump/beach_1.jpg", alt: "prof. pics at techstars demo day for aayats" },
    { src: "/photodump/birthday_1.jpg", alt: "work setup @ inpo" },
    { src: "/photodump/bolder_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/charleston_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/chattanooga_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/chattanooga_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/dealership_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/fit_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/fl_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/food_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/food_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/food_3.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friendgrad_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friendgrad_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_3.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_4.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_5.png", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/friends_6.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/grad_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/hs_swim.png", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/lift_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/mn_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/mn_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/ny_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/ny_2.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/ny_3.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/ny_4.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/papaya_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/rave_1.jpg", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/swim_1.png", alt: "birthday vibes with the inpo crew!" },
    { src: "/photodump/swim_2.jpg", alt: "birthday vibes with the inpo crew!" },
  ];

export function Gallery() {
  const { openIndex, open, close, next, prev } = useImagePreview(photodumpImages.length);
  const backdropRef = useRef<HTMLDivElement>(null);

  // stable handlers — no re-render on every open/close
  const handlers = useMemo(
    () => photodumpImages.map((_, i) => () => open(i)),
    [open]
  );

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) close();
  };

  return (
<section className="p-12 sm:px-8 md:px-16 lg:py-24 lg:px-24 xl:py-32 xl:px-40 bg-gradient-to-bl from-neutral-100 to-neutral-200 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-3xl">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {photodumpImages.map((img, i) => (
          <div
            key={img.src}
            className="aspect-4/2 rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 will-change-transform"
            onClick={handlers[i]}
          >
            <img
              src={img.src}
              alt={img.alt}
              width={400}
              height={200}
              className="w-full h-full object-cover"
              loading={i < 6 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <>
          {/* preload adjacent images */}
          {[(openIndex + 1) % photodumpImages.length,
            (openIndex - 1 + photodumpImages.length) % photodumpImages.length
          ].map(i => (
            <link key={i} rel="preload" as="image" href={photodumpImages[i].src} />
          ))}

          <div
            ref={backdropRef}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={onBackdropClick}
          >
            <button onClick={close} className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <CircleX color="white" size={20} />
            </button>
            <button onClick={prev} className="absolute left-2 md:left-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowBigLeftDash color="white" size={28} />
            </button>
            <button onClick={next} className="absolute right-2 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowBigRightDash color="white" size={28} />
            </button>

            <div className="relative w-[calc(100vw-80px)] md:w-[85vw] h-[80vh]">
              <Image
                src={photodumpImages[openIndex].src}
                alt={photodumpImages[openIndex].alt}
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 768px) calc(100vw - 80px), 85vw"
                priority
              />
            </div>
            <p className="absolute bottom-3 md:bottom-6 left-4 right-4 text-center text-white/70 text-xs md:text-sm truncate px-10">
              {photodumpImages[openIndex].alt}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
