"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [hasValue, setHasValue] = useState({ name: false, email: false });

  return (
    <section>
      <header className="header-section">
        <p className="text-4xl text-white">Kontakt</p>
      </header>
      <form className="form-section">
        <div className="input-container">
          <input
            type="text"
            id="name"
            placeholder=" "
            className={`input-base ${hasValue.name ? "pt-5" : ""}`}
            onChange={(e) =>
              setHasValue({ ...hasValue, name: e.target.value !== "" })
            }
          />
          <label htmlFor="name" className="label-base">
            Vaše ime
          </label>
        </div>
        <div className="input-container">
          <input
            type="email"
            id="email"
            placeholder=" "
            className={`input-base ${hasValue.email ? "pt-5" : ""}`}
            onChange={(e) =>
              setHasValue({ ...hasValue, email: e.target.value !== "" })
            }
          />
          <label htmlFor="email" className="label-base">
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
          className="button-base"
          onClick={(e) => e.preventDefault()}
        >
          Pošalji
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
