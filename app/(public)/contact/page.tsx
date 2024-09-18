"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [hasValue, setHasValue] = useState({ name: false, email: false });

  return (
    <section>
      <header className="flex items-end justify-start font-lusitana bg-primary px-6 py-4 h-36 rounded-lg">
        <p className="text-4xl text-white">Kontakt</p>
      </header>
      <form className="flex items-center justify-center flex-col bg-accent mt-2 px-8 pt-7 pb-5 rounded-lg">
        <div className="relative w-full mb-3 bg-primary rounded-md">
          <input
            type="text"
            id="name"
            placeholder=" "
            className={`peer w-full focus:pt-5 px-3 py-2 rounded-md outline-none transition-all duration-100 ease ${hasValue.name && "pt-5"}`}
            onChange={(e) =>
              setHasValue({ ...hasValue, name: e.target.value !== "" })
            }
          />
          <label
            htmlFor="name"
            className={`absolute left-3 top-0 text-md text-gray-500 transition-all duration-100 ease select-none py-1 cursor-text ${
              hasValue.name
                ? "text-xs peer-focus:text-blue-500"
                : "peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
            }`}
          >
            Vaše ime
          </label>
        </div>
        <div className="relative w-full mb-3 bg-primary rounded-md">
          <input
            type="email"
            id="email"
            placeholder=" "
            className={`peer w-full focus:pt-5 px-3 py-2 rounded-md outline-none transition-all duration-100 ease ${hasValue.email && "pt-5"}`}
            onChange={(e) =>
              setHasValue({ ...hasValue, email: e.target.value !== "" })
            }
          />
          <label
            htmlFor="email"
            className={`absolute left-3 top-0 text-md text-gray-500 transition-all duration-100 ease select-none py-1 cursor-text ${
              hasValue.email
                ? "text-xs peer-focus:text-blue-500"
                : "peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
            }`}
          >
            Vaša e-mail adresa
          </label>
        </div>
        <label className="flex items-start justify-center flex-col w-full mb-3">
          <span className="mb-1.5 text-md select-none">Poruka</span>
          <textarea
            placeholder="Poruka..."
            className="leading-loose w-full px-4 py-3 rounded-md outline-none resize-none"
            rows={7}
          />
        </label>
        <button
          type="submit"
          className="flex justify-center items-center bg-primary mt-4 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
        >
          Pošalji
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
