"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Kayaking in Dalonega, GA
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A beautiful day kayaking in Dalonega, GA. The perfect place to relax,
        unwind, and enjoy life. It&apos;s a place where the sun shines bright,
        and the water is always refreshing
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        My girlfriend and I in Naples, FL
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A beautiful day in Naples, FL with my girlfriend. The perfect place to
        relax, unwind, and enjoy life
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Nissan R34 GTR
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The iconic Nissan R34 GTR, a legend in the world of sports cars. With its
        sleek design, powerful engine, and unmatched performance, it&apos;s a
        dream car for many enthusiasts.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        With the boys in Naples, FL
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A beautiful beach in Naples, FL. The perfect place to relax, unwind, and
        enjoy life. It&apos;s a place where the sun shines bright, and the ocean
        breeze is always refreshing.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Techstars 24' Demo Day
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A showcase of the best startups from the Techstars 24' cohort. The start-up I interned at, Aayats, was one of the first ones presenting. It&apos;s a
        day of innovation, inspiration, and celebration
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Techstars 24' Demo Day - Behind the scenes
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A glimpse into the hard work, dedication, and passion that goes into
        making Techstars 24' Demo Day a success. It&apos;s a day of innovation,
        inspiration, and celebration.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.discordapp.com/attachments/895063460885434430/1303157337938202664/IMG_0950.jpg?ex=672abb58&is=672969d8&hm=e8e504c730d175d0dfff29f7b48f46fb4d80be53522b51f3c8bf445d737b4863&",  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/attachments/895063460885434430/1303158763888578671/DSCF0056.jpg?ex=672abcac&is=67296b2c&hm=bfd4940c25d504defe8be0746524b55a5d4ddc106c24a04822a0dbe730083b19&",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/attachments/895063460885434430/1303161465510957066/image.jpg?ex=672abf30&is=67296db0&hm=f45e46d40697a14afbafe0f34c98f295c771423dcbddda90fe328d5e75424e60&",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.discordapp.com/attachments/895063460885434430/1303158761992749077/IMG_3577.jpg?ex=672abcac&is=67296b2c&hm=41f7b614c74271dfe3a814bfc516584383ae41308e9dfe8e9bcea3c3a517ab6b&",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.discordapp.com/attachments/895063460885434430/1303156986334023733/72160141-82FD-42E9-B52E-8498B6B739E9techstars-95.jpg?ex=672abb05&is=67296985&hm=7bf2e904d96b22608e439962382484f6de7c96cdba7c99bb6a409f5047868510&",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "https://media.licdn.com/dms/image/v2/D5622AQHWfT_oDIzZ1A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729028888747?e=1733356800&v=beta&t=QqT9efCYi3P-6fPz3umWtRzcj7sAxDXtC6jCtp178oY",
  },
];
