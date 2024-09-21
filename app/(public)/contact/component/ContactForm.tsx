"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [hasValue, setHasValue] = useState({ name: false, email: false });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      form.current &&
      serviceId &&
      templateId &&
      publicKey &&
      formData.name &&
      formData.email &&
      formData.message
    ) {
      setLoading(true);

      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setFormData({ ...formData, name: "" });
          setFormData({ ...formData, email: "" });
          setFormData({
            ...formData,
            message: "Hvala Vam na poruci! :) \n\nOdgovorićemo Vam što prije!",
          });

          setLoading(false);

          setTimeout(() => {
            setFormData({
              ...formData,
              message: "",
            });
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      setFormData({
        ...formData,
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
          value={formData.name}
          placeholder=" "
          className={`input-base ${hasValue.name ? "pt-5" : ""}`}
          onChange={(e) => {
            setHasValue({ ...hasValue, name: e.target.value !== "" });
            setFormData({
              ...formData,
              name: e.currentTarget.value,
            });
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
          name="email_id"
          value={formData.email}
          placeholder=" "
          className={`input-base ${hasValue.email ? "pt-5" : ""}`}
          onChange={(e) => {
            setHasValue({ ...hasValue, email: e.target.value !== "" });
            setFormData({
              ...formData,
              email: e.currentTarget.value,
            });
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
          value={formData.message}
          rows={7}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: e.currentTarget.value,
            });
          }}
        />
      </label>
      <button type="submit" className="button-base">
        {loading ? "Sačekajte..." : "Pošalji"}
      </button>
    </form>
  );
};

export default ContactForm;
