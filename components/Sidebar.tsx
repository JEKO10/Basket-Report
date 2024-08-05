import React from "react";
import {
  PiHouseLineLight,
  PiInfoLight,
  PiMailboxLight,
  PiQuestionLight,
  PiUserCheckLight,
  PiUserLight,
  PiUsersLight,
} from "react-icons/pi";
import { TbTournament } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="my-4 h-56 w-56 rounded-lg">
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
            <PiMailboxLight strokeWidth={10} />
            <p className="text-base">Kontakt</p>
          </div>
        </li>
        <li>
          <div className="sidebar-items">
            <PiQuestionLight strokeWidth={10} />
            <p className="text-base">FaQ</p>
          </div>
        </li>
        <li>
          <div className="sidebar-items">
            <PiUsersLight strokeWidth={10} />
            <p className="text-base">Korisnici</p>
          </div>
        </li>
        <li>
          <div className="sidebar-items">
            <TbTournament strokeWidth={1.5} />
            <p className="text-base">Napravi turnir</p>
          </div>
        </li>
        <li>
          <div className="sidebar-items">
            <PiUserCheckLight strokeWidth={10} />
            <p className="text-base">Prijavi se</p>
          </div>
        </li>
        <li>
          <div className="sidebar-items mb-0">
            <PiUserLight strokeWidth={10} />
            <p className="text-base">Napravi nalog</p>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
