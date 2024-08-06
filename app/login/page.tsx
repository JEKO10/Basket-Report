import React from "react";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";

const LogInPage = () => {
  return (
    <div className="max-w-sm mx-auto my-10">
      <header className="flex items-end justify-start font-lusitana bg-primary px-6 py-4 h-36 rounded-lg">
        <p className="text-4xl text-white">Prijavi se</p>
      </header>
      <form className="flex items-start justify-center flex-col bg-accent mt-2 px-8 pt-7 pb-7 rounded-lg">
        <label className="flex items-start justify-center flex-col w-full mb-6">
          <span className="mb-1 text-sm select-none">Email</span>
          <div className="w-full flex items-center justify-center bg-body px-2 border-2 rounded-md focus-within:border-primary">
            <MdAlternateEmail className="text-[#8e8e8e] text-xl" />
            <input
              type="email"
              name="email"
              required
              placeholder="Unesi email adresu"
              className="w-full px-2 py-1 bg-body rounded-md outline-none"
            />
          </div>
        </label>
        <label className="flex items-start justify-center flex-col w-full">
          <span className="mb-1 text-sm select-none">Šifra</span>
          <div className="w-full flex items-center justify-center bg-body px-2 border-2 rounded-md focus-within:border-primary">
            <LuDoorClosed className="text-[#8e8e8e] text-xl" />
            <input
              type="password"
              name="password"
              required
              placeholder="Unesi šifru"
              className="w-full px-2 py-1 bg-transparent rounded-md outline-none"
            />
          </div>
        </label>
        <button
          type="submit"
          className="flex items-center justify-between bg-primary mt-5 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
        >
          <span className="text-sm font-medium">Prijavi se</span>
          <LuDoorOpen />
        </button>
      </form>
    </div>
  );
};

export default LogInPage;
