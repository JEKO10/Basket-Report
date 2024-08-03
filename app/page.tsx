import { Inter } from "next/font/google";
import React from "react";
import { PiHouseLineLight, PiInfoLight, PiUsersLight } from "react-icons/pi";
import { TbTournament } from "react-icons/tb";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <aside className="bg-background my-4 px-5 py-5 h-96 w-56 rounded-lg">
        <ul className="text-text text-2xl">
          <li>
            <div className="sidebar-items">
              <PiHouseLineLight strokeWidth={10} />
              <p className="text-base">Početna</p>
            </div>
          </li>
          <li>
            <div className="sidebar-items">
              <PiInfoLight strokeWidth={10} />
              <p className="text-base">O nama</p>
            </div>
          </li>
          <li>
            <div className="sidebar-items">
              <PiUsersLight strokeWidth={10} />
              <p className="text-base">Korisnici</p>
            </div>
          </li>
          <li>
            <div className="sidebar-items mb-0">
              <TbTournament strokeWidth={1} />
              <p className="text-base">Napravi turnir</p>
            </div>
          </li>
        </ul>
      </aside>
    </div>
  );
}
