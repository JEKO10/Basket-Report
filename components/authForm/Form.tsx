import React from "react";

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
      </form>
    </div>
  );
};

export default FormAuth;
