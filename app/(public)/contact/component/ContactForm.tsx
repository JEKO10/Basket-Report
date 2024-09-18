"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [hasValue, setHasValue] = useState({ name: false, email: false });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.SERVICE_ID;
    const templateId = process.env.TEMPLATE_ID;
    const publicKey = process.env.PUBLIC_KEY;

    if (
      form.current &&
      serviceId &&
      templateId &&
      publicKey &&
      userInfo.name &&
      userInfo.email &&
      userInfo.message
    ) {
      console.log("a");

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setUserInfo({ ...userInfo, name: "" });
          setUserInfo({ ...userInfo, email: "" });
          setUserInfo({
            ...userInfo,
            message: "Hvala Vam! :) \n\nOdgovorićemo Vam što prije!",
          });

          setTimeout(() => {
            setUserInfo({
              ...userInfo,
              message: "",
            });
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      setUserInfo({
        ...userInfo,
        message: "Sva polja su obavezna!",
      });
    }
  };

  return (
    <form className="form-section" ref={form} onSubmit={sendEmail}>
      <div className="input-container">
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder=" "
          className={`input-base ${hasValue.name ? "pt-5" : ""}`}
          onChange={(e) => {
            setHasValue({ ...hasValue, name: e.target.value !== "" });
            setUserInfo({ ...userInfo, name: e.currentTarget.value });
          }}
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
          name="email_id"
          className={`input-base ${hasValue.email ? "pt-5" : ""}`}
          onChange={(e) => {
            setHasValue({ ...hasValue, email: e.target.value !== "" });
            setUserInfo({ ...userInfo, email: e.currentTarget.value });
          }}
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
          name="message"
          rows={7}
          onChange={(e) => {
            setUserInfo({ ...userInfo, message: e.currentTarget.value });
          }}
        />
      </label>
      <button type="submit" className="button-base">
        Pošalji
      </button>
    </form>
  );
};

export default ContactForm;
