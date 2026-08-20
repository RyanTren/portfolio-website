"use client"

import { useImagePreview } from "@/hooks/useImagePreview";
import { useRef, useMemo } from "react";
import { CircleX, ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";

const photodumpImages = [
  { src: "/photodump/atl_1.jpg", alt: "atl nights, bad decisions, elite memories" },
  { src: "/photodump/atl_2.jpg", alt: "intern by day, fit check by lunch break" },
  { src: "/photodump/atl_3.jpg", alt: "corporate bonding but make it wholesome" },
  { src: "/photodump/atl_4.jpg", alt: "startup talk + zero sleep combo" },
  { src: "/photodump/atl_5.jpg", alt: "locked in like finals week never ended" },
  { src: "/photodump/bang_1.jpg", alt: "when the homie turns the hangout into art" },
  { src: "/photodump/beach_1.jpg", alt: "techstars but lowkey felt like celebrities" },
  { src: "/photodump/birthday_1.jpg", alt: "the setup where caffeine becomes code" },
  { src: "/photodump/bolder_1.jpg", alt: "proof we actually touched grass" },
  { src: "/photodump/charleston_1.jpg", alt: "main character energy in charleston" },
  { src: "/photodump/chattanooga_1.jpg", alt: "accidentally romanticizing a random trip" },
  { src: "/photodump/chattanooga_2.jpg", alt: "side quest completed successfully" },
  { src: "/photodump/dealership_1.jpg", alt: "financial decisions were considered" },
  { src: "/photodump/fit_1.jpg", alt: "fit so hard i had to document it" },
  { src: "/photodump/fl_1.jpg", alt: "florida air hit different for no reason" },
  { src: "/photodump/food_1.jpg", alt: "meal disappeared 4 minutes later" },
  { src: "/photodump/food_2.jpg", alt: "the kind of food that fixes your mood" },
  { src: "/photodump/food_3.jpg", alt: "camera eats first unfortunately" },
  { src: "/photodump/friendgrad_1.jpg", alt: "watching the gang level up in real time" },
  { src: "/photodump/friendgrad_2.jpg", alt: "linkedin post incoming fr" },
  { src: "/photodump/friends_1.jpg", alt: "collecting memories like pokemon cards" },
  { src: "/photodump/friends_2.jpg", alt: "everyone here passed the vibe check" },
  { src: "/photodump/friends_3.jpg", alt: "low quality pic high quality friendship" },
  { src: "/photodump/friends_4.jpg", alt: "group lore expanding rapidly" },
  { src: "/photodump/friends_5.png", alt: "this image contains too many inside jokes" },
  { src: "/photodump/friends_6.jpg", alt: "we definitely said 'one more pic'" },
  { src: "/photodump/grad_1.jpg", alt: "the academic comeback was successful" },
  { src: "/photodump/hs_swim.png", alt: "built different since swim season" },
  { src: "/photodump/lift_1.jpg", alt: "gym arc still in progress" },
  { src: "/photodump/mn_1.jpg", alt: "midwest adventures and frozen hands" },
  { src: "/photodump/mn_2.jpg", alt: "cold weather warm memories type beat" },
  { src: "/photodump/ny_1.jpg", alt: "nyc made me walk 40k steps for vibes" },
  { src: "/photodump/ny_2.jpg", alt: "cinematic for absolutely no reason" },
  { src: "/photodump/ny_3.jpg", alt: "main character montage moment" },
  { src: "/photodump/ny_4.jpg", alt: "survived new york with minimal damage" },
  { src: "/photodump/papaya_1.jpg", alt: "papaya king level life experience" },
  { src: "/photodump/rave_1.jpg", alt: "ears ringing but spirit healed" },
  { src: "/photodump/swim_1.png", alt: "chlorine and character development" },
  { src: "/photodump/swim_2.jpg", alt: "peak aquatic athlete propaganda" },
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
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={200}
              className="w-full h-full object-cover"
              loading={i < 6 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <>
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
