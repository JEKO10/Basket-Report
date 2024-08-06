import React from "react";
import { LuDoorOpen } from "react-icons/lu";

type FormAuthProps = {
  label: string;
  children: React.ReactNode;
};

const FormAuth = ({ label, children }: FormAuthProps) => {
  return (
    <div className="max-w-sm mx-auto my-10">
      <header className="flex items-end justify-start font-lusitana bg-primary px-6 py-4 h-36 rounded-lg">
        <p className="text-4xl text-white">{label}</p>
      </header>
      <form className="flex items-start justify-center flex-col bg-accent mt-2 px-8 pt-7 pb-7 rounded-lg">
        {children}
        <button
          type="submit"
          className="flex items-center justify-between bg-primary mt-2 w-full text-text text-lg py-2 px-3 rounded-md transition hover:bg-primary/65"
        >
          <span className="text-sm font-medium">Prijavi se</span>
          <LuDoorOpen />
        </button>
      </form>
    </div>
  );
};

export default FormAuth;
