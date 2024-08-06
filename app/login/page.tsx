import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { PiDoorLight } from "react-icons/pi";

const LogInPage = () => {
  return (
    <div className="max-w-sm mx-auto my-10">
      <header className="flex items-end justify-start font-lusitana bg-primary px-6 py-4 h-36 rounded-lg">
        <p className="text-4xl text-white">Log in</p>
      </header>
      <form className="flex items-start justify-center flex-col bg-accent mt-2 px-8 py-7 rounded-lg">
        <label className="flex items-start justify-center flex-col w-full mb-6">
          <span className="mb-1 text-sm select-none">Email</span>
          <div className="w-full flex items-center justify-center bg-body text-[#8e8e8e] px-2 border-2 rounded-md focus-within:border-primary">
            <MdAlternateEmail />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-full px-2 py-1 bg-body rounded-md outline-none"
            />
          </div>
        </label>
        <label className="flex items-start justify-center flex-col w-full">
          <span className="mb-1 text-sm select-none">Password</span>
          <div className="w-full flex items-center justify-center bg-body text-[#8e8e8e] px-2 border-2 rounded-md focus-within:border-primary">
            <PiDoorLight />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter password"
              className="w-full px-2 py-1 bg-transparent rounded-md outline-none"
            />
          </div>
        </label>
      </form>
    </div>
  );
};

export default LogInPage;
