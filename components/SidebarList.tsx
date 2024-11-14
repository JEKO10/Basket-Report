"use client";

import Link from "next/link";
import React from "react";
import { BiLayerPlus } from "react-icons/bi";
import { CiPower } from "react-icons/ci";
import {
  PiInfoLight,
  PiMailboxLight,
  PiQuestionLight,
  PiUserCheckLight,
  PiUserLight,
  PiUserPlusLight,
  PiUsersLight,
} from "react-icons/pi";
import { TbTournament } from "react-icons/tb";

import { signOut } from "@/auth/auth";

const SidebarList = ({
  isLoggedIn,
  username,
}: {
  isLoggedIn?: boolean;
  username?: string;
}) => {
  return (
    <aside className="hidden sm:block flex-shrink-0 my-4 h-56 rounded-lg w-36 sm:w-44 md:w-48 lg:w-52">
      <ul className="text-text text-2xl">
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
        <li>
          <Link href="/create" className="sidebar-link">
            <BiLayerPlus />
            <p className="text-base">Napravi turnir</p>
          </Link>
        </li>
        <li>
          <Link href="/tournaments" className="sidebar-link">
            <TbTournament strokeWidth={1.5} />
            <p className="text-base">Turniri</p>
          </Link>
        </li>
        <li>
          <Link href="/users" className="sidebar-link">
            <PiUsersLight strokeWidth={10} />
            <p className="text-base">Korisnici</p>
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link href="/profile" className="sidebar-link">
                <PiUserLight strokeWidth={10} />
                <p className="text-base">{username}</p>
              </Link>
            </li>
            <li className="sidebar-link">
              <button
                type="button"
                onClick={async () => await signOut({ redirectTo: "/" })}
                className="flex"
              >
                <CiPower strokeWidth={1} />
                <p className="text-base">Odjavi se</p>
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login" className="sidebar-link">
                <PiUserCheckLight strokeWidth={10} />
                <p className="text-base">Prijavi se</p>
              </Link>
            </li>
            <li>
              <Link href="/register" className="sidebar-link mb-0">
                <PiUserPlusLight strokeWidth={10} />
                <p className="text-base">Napravi nalog</p>
              </Link>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default SidebarList;
