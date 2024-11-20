"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import imgSrc from "../../../../public/profile.jpg";

const ProfilePicture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <section>
      <Image
        src={image || imgSrc}
        alt="Profile picture"
        className="rounded-full"
        height={50}
        width={50}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <article className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg shadow-lg p-5 w-96 relative">
            <IoMdClose
              className="text-red-600 text-2xl absolute top-2 right-2 cursor-pointer transition hover:text-red-400"
              onClick={() => setIsModalOpen(false)}
            />
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center mt-10 border-2 border-dashed border-gray-300 rounded-lg p-5 cursor-pointer"
            >
              <input
                id="image-upload"
                name="file"
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={selectImage}
                className="hidden"
              />
              <p className="text-secondary">
                Prevuci ili klikni da dodaš sliku
              </p>
            </label>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sačuvaj
            </button>
          </div>
        </article>
      )}
    </section>
  );
};

export default ProfilePicture;
