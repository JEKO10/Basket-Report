import Image from "next/image";
import React from "react";

import { getUserByUsername } from "@/actions/user";
import TournamentsList from "@/components/TournamentsList";

import imgSrc from "../../../../public/profile.jpg";

const SingleUserPage = async ({ params }: { params: { username: string } }) => {
  const data = await getUserByUsername(params.username);

  return (
    <section className="px-2 py-5 sm:pl-10 sm:pr-0">
      <article className="flex justify-start items-start mb-20 relative">
        <Image
          src={imgSrc}
          alt="Profile picture"
          className="rounded-full"
          height={50}
          width={50}
        />
        <div className="mx-5">
          <h3 className="text-2xl italic">{data?.username}</h3>
          <p className="text-sm text-secondary">{data?.email}</p>
        </div>
      </article>
      <article>
        <h3 className="font-lusitana text-3xl mb-5 font-medium leading-tight sm:leading-none">
          Turniri korisnika {data?.username}:
        </h3>
        <div className="bg-accent mt-5 mb-10 rounded">
          {data?.tournaments.length === 0 && (
            <p className="text-xl italic font-medium">
              Nije pronađen nijedan turnir!
            </p>
          )}
          <TournamentsList
            data={data?.tournaments}
            page="profile"
            isUser={true}
          />
        </div>
      </article>
    </section>
  );
};

export default SingleUserPage;
