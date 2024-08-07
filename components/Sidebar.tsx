import Link from "next/link";
import React from "react";
import {
  PiHouseLineLight,
  PiInfoLight,
  PiMailboxLight,
  PiQuestionLight,
  PiUserCheckLight,
  PiUserLight,
  // PiUsersLight,
} from "react-icons/pi";
import { TbTournament } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="flex-shrink-0 my-4 h-56 w-64 rounded-lg">
      <ul className="text-text text-2xl">
        <li>
          <Link href="/" className="sidebar-link">
            <PiHouseLineLight strokeWidth={10} />
            <p className="text-base">Početna</p>
          </Link>
        </li>
        <li>
          <Link href="/about" className="sidebar-link">
            <PiInfoLight strokeWidth={10} />
            <p className="text-base">O nama</p>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="sidebar-link">
            <PiMailboxLight strokeWidth={10} />
            <p className="text-base">Kontakt</p>
          </Link>
        </li>
        <li>
          <Link href="/faq" className="sidebar-link">
            <PiQuestionLight strokeWidth={10} />
            <p className="text-base">FaQ</p>
          </Link>
        </li>
        {/* <li>
          <Link href="/users" className="sidebar-link">
            <PiUsersLight strokeWidth={10} />
            <p className="text-base">Korisnici</p>
          </Link>
        </li> */}
        <li>
          <Link href="/new" className="sidebar-link">
            <TbTournament strokeWidth={1.5} />
            <p className="text-base">Napravi turnir</p>
          </Link>
        </li>
        <li>
          <Link href="/login" className="sidebar-link">
            <PiUserCheckLight strokeWidth={10} />
            <p className="text-base">Prijavi se</p>
          </Link>
        </li>
        <li>
          <Link href="/register" className="sidebar-link mb-0">
            <PiUserLight strokeWidth={10} />
            <p className="text-base">Napravi nalog</p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
