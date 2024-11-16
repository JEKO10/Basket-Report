import ContactForm from "./component/ContactForm";

const ContactPage = () => {
  return (
    <section className="py-5 sm:pl-5 md:pl-10">
      <header className="header-section">
        <p className="text-4xl text-white">Kontakt</p>
      </header>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
