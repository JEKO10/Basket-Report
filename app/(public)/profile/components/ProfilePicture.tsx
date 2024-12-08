"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import imgSrc from "../../../../public/profile.jpg";

const ProfilePicture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (!selectedFile) return;

    const imgLink = URL.createObjectURL(selectedFile);
    setImage(imgLink);
  };

  const removeImage = () => {
    setImage("");

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const clickOutside = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("click", clickOutside, true);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", clickOutside, true);
    }
    // Clean up the listener when the component is unmounted
    return () => document.removeEventListener("click", clickOutside, true);
  }, [isModalOpen]);

  return (
    <section>
      <Image
        src={image || imgSrc}
        alt="Profile picture"
        className="rounded-full cursor-pointer"
        height={50}
        width={50}
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering clickOutside
          setIsModalOpen(true);
        }}
      />
      {isModalOpen && (
        <article
          className={`fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            ref={containerRef}
            className={`bg-background rounded-lg shadow-lg p-5 w-96 relative transform transition-transform duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <IoMdClose
              className="text-red-600 text-2xl absolute top-2 right-2 cursor-pointer transition hover:text-red-400"
              onClick={handleClose}
            />
            <label
              htmlFor="file"
              className="flex items-center justify-center mt-5 h-48 relative border-2 border-white rounded-sm border-dashed"
            >
              <input
                name="file"
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={selectImage}
                className="absolute h-full w-full inset-0 opacity-0 z-10 cursor-pointer"
              />
              <p className="text-secondary">
                Prevuci ili klikni da dodaš sliku
              </p>
            </label>
            <div className="flex justify-between w-full mt-5">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                onClick={handleClose}
              >
                Sačuvaj
              </button>
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
                onClick={() => {
                  removeImage();
                  handleClose();
                }}
              >
                Izbriši sliku
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default ProfilePicture;
