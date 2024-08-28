import Link from "next/link";

import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <section>
      <Navbar />
      <article className="my-5">
        <h2 className="text-2xl mb-5">Nema šta da se vidi ovdje :)</h2>
        <Link
          href="/"
          className="text-md italic font-medium text-[#6eabda] underline -mt-1"
        >
          Nazad na početnu stranicu
        </Link>
      </article>
    </section>
  );
};

export default NotFound;
