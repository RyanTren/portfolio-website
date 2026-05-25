
import React from "react";
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


import {
  Heart,
  Coffee,
  Gamepad2,
  Music,
} from "lucide-react"

export function About() {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    { src: "/gallery_images/inpo_4.jpg", alt: "ootd @ inpo" },
    { src: "/gallery_images/inpo_1.jpg", alt: "inpo rotation 2 get-together!" },
    { src: "/gallery_images/aayats_1.jpg", alt: "me & lucas grinding! (CTO @ aayats)" },
    { src: "/gallery_images/aayats_2.jpg", alt: "me & lucas grinding! pt.2" },
    { src: "/gallery_images/inpo_2.jpg", alt: "anuj (prev. co-op @ inpo) drawing of our hangout!" },
    { src: "/gallery_images/aayats_3.jpg", alt: "prof. pics at techstars demo day for aayats" },
    { src: "/gallery_images/inpo_3.jpg", alt: "work setup @ inpo" },
  ];

  useEffect(() => {
      const galleryInterval = setInterval(() => {
        setSelectedImage((prev) => (prev + 1) % galleryImages.length)
      }, 2000)
      return () => clearInterval(galleryInterval)
    }, [galleryImages.length]);

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-regular mb-6">
              who am{" "}
              <span className="bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">i</span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              while i love building software and exploring AI, there&apos;s more to my story...
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Gallery */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-full object-cover transition-all duration-400 transition-ease-in-out"
                  />
                </div>

                {/* Gallery Navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        index === selectedImage
                          ? "bg-lime-600 scale-125 drop-shadow-lg hover:bg-emerald-600"
                          : "bg-gray-600 scale-95 drop-shadow-2xl dark:bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mini Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Growing up in the Metro-Atlanta area, I discovered my passion for technology through curiosity, unlimited creativity, and 
                  countless hours of tinkering. What started as wondering "how does this work?" evolved into building solutions that impact real people.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Kennesaw State University, I&apos;m not just studying Computer Science. I independently learn about AI
                  (LLMs, RAG, NLP, MV, ML, etc.) and build projects to apply and grow my knowledge in Software Engineering.
                </p>
              </div>

              {/* Interests & Hobbies */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">When I&apos;m Not Coding</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-400">
                    <CardContent className="p-0 flex items-center space-x-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">adventure</p>
                        <p className="text-sm text-muted-foreground">travel, eating at new spots, etc.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-400">
                    <CardContent className="p-0 flex items-center space-x-3">
                      <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
                        <Coffee className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">sports</p>
                        <p className="text-sm text-muted-foreground">almost everything :)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-400 cursor-pointer">
                    <CardContent className="p-0 flex items-center space-x-3" onClick={() => window.open("https://steamcommunity.com/id/leaked/")} >
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Gamepad2 className="h-5 w-5 text-green-600"/>
                      </div>
                      <div>
                        <p className="font-medium">gaming</p>
                        <p className="text-sm text-muted-foreground">fps & metaverse platform</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-400 cursor-pointer">
                    <CardContent className="p-0 flex items-center space-x-3" onClick={() => window.open("https://open.spotify.com/user/1d6z64mw5ura8vmmak3hw7eij?si=8abe79bd4c97408f&nd=1&dlsi=ddde465d2ba64bd0", "_blank")}>
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Music className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">music</p>
                        <p className="text-sm text-muted-foreground">dream-pop & electroclash</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6 drop-shadow-sm">
                <h4 className="font-bold text-lg mb-4">fun facts</h4>

                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Swam for over 10 years competitively in Georgia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Built 5 AI apps that scaled to 200+ users each</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Currently maintaining a 3.79 GPA while working full-time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Love fashion and style, collecting pieces since 6th grade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


