import React from "react";

const FaqPage = () => {
  return (
    <section className="p-5 sm:px-10">
      <h2 className="font-lusitana text-center sm:text-start text-4xl mt-5 mb-1">
        Često postavljana pitanja
      </h2>
      <article className="[&>div]:my-10 [&>div>h3]:text-lg [&>div>h3]:md:text-xl [&>>div>h3]:italic [&>>div>h3]:font-normal [&>div>h3]:text-[#6eabda] [&>div>h3]:my-1 [&>div>p]:text-base [&>div>p]:md:text-lg [&>div>p]:italic">
        <div>
          <h3>1. Kako kreirati turnir na vašoj platformi?</h3>
          <p>
            Da biste kreirali turnir, potrebno je da se prijavite na svoj nalog,
            odaberete opciju Kreiraj turnir i pratite korake za podešavanje
            formata, broja učesnika i pravila. Sve je brzo i jednostavno!
          </p>
        </div>
        <div>
          <h3>2. Koji formati turnira su podržani?</h3>
          <p>
            Naša platforma podržava različite formate turnira, uključujući
            eliminacioni format, round-robin, kao i kombinovane sisteme. Možete
            prilagoditi format prema svojim potrebama.
          </p>
        </div>
        <div>
          <h3>3. Kako mogu pratiti rezultate tokom turnira?</h3>
          <p>
            Rezultati su automatski ažurirani nakon svakog meča. Kao
            organizator, možete ručno uneti rezultate, dok će učesnici i
            posetioci imati pristup rezultatima u realnom vremenu.
          </p>
        </div>
        <div>
          <h3>4. Da li je platforma besplatna za korišćenje?</h3>
          <p>
            Osnovne funkcionalnosti su potpuno besplatne. Takođe nudimo napredne
            opcije za prilagođavanje turnira i dodatne funkcije kroz premium
            planove.
          </p>
        </div>
        <div>
          <h3>
            5. Koji su minimalni i maksimalni brojevi učesnika po turniru?
          </h3>
          <p>
            Minimalni broj učesnika je 2, dok je maksimalni broj ograničen na
            256 učesnika.
          </p>
        </div>
        <div>
          <h3>6. Kako mogu kontaktirati podršku?</h3>
          <p>
            Ako imate bilo kakvih pitanja ili problema, možete nas kontaktirati
            putem emaila ili putem kontakt forme na sajtu. Naš tim za podršku je
            tu da vam pomogne.
          </p>
        </div>
      </article>
    </section>
  );
};

export default FaqPage;
