"use client";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

// useEffect(() => {
//   localStorage.setItem("galleryFilter", filter);
// }, [filter]);

// useEffect(() => {
//   const saved = localStorage.getItem("galleryFilter");
//   if (saved) setFilter(saved);
// }, []);

export default function Gallery() {
  // Define how many files of each type
  const jpgCount = 172;
  const wepbCount = 2;
  const gifCount = 17;

  // Create all filenames automatically
  const jpgs = Array.from({ length: jpgCount }, (_, i) => `jpg (${i + 1}).jpg`);
  const webps = Array.from(
    { length: wepbCount },
    (_, i) => `webp (${i + 1}).webp`
  );
  const gifs = Array.from({ length: gifCount }, (_, i) => `gif (${i + 1}).gif`);

  // Combine them all into one array
  const [images] = useState([...jpgs, ...webps, ...gifs]);

  const [selected, setSelected] = useState(null); // for lightbox

  const [showButton, setShowButton] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setShowButton(window.scrollY > 300);
    };
  }

  const [filter, setFilter] = useState("all");

  const filteredImages = images.filter((img) => {
    if (filter === "jpg") return img.endsWith(".jpg");
    if (filter === "gif") return img.endsWith(".gif");
    if (filter === "webp") return img.endsWith(".webp");
    return true; // "all" → no filter
  });

  return (
    <div className="mt-10 px-4 mx-5">
      <h2 className="text-2xl font-bold text-center mb-6">
        📸 GAIA Genesis Gallery
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Total images: {filteredImages.length} of {images.length} images
      </p>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`${
            filter === "all" ? "bg-blue-600" : "bg-gray-800"
          } px-3 py-1 text-white rounded`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("jpg")}
          className={`${
            filter === "jpg" ? "bg-blue-600" : "bg-gray-800"
          } px-3 py-1 text-white rounded`}
        >
          JPG
        </button>
        <button
          onClick={() => setFilter("gif")}
          className={`${
            filter === "gif" ? "bg-blue-600" : "bg-gray-800"
          } px-3 py-1 text-white rounded`}
        >
          GIF
        </button>
        <button
          onClick={() => setFilter("webp")}
          className={`${
            filter === "webp" ? "bg-blue-600" : "bg-gray-800"
          } px-3 py-1 text-white rounded`}
        >
          WEBP
        </button>
      </div>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-10 space-y-4">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
            onClick={() => setSelected(`/assets/images/${img}`)}
          >
            <Image
              src={`/assets/images/${img}`}
              alt={`Gallery ${index + 1}`}
              width={600} // fixed width
              height={0} // let height auto-adjust
              className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="max-h-[90vh]">
            <Image
              src={selected}
              alt="Selected"
              width={1200}
              height={800}
              className="w-auto h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
