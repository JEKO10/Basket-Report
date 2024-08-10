import React from "react";

const Name = () => {
  return (
    <div className="my-6">
      <h3 className="text-2xl mb-4 italic font-medium">Unesite ime turnira</h3>
      <input
        type="text"
        name="name"
        placeholder="Ime turnira"
        className="bg-primary text-base text-text w-52 px-3 py-1 border-2 border-transparent rounded-md outline-none focus:border-accent focus:border-2 placeholder-white"
      />
    </div>
  );
};

export default Name;
