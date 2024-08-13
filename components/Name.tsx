import React from "react";

const Name = ({
  formData,
  setFormData,
}: {
  formData: {
    tournamentType: number;
    bracketSize: boolean;
    tournamentName: string;
    participants: number;
    teams: string;
    thirdPlace: boolean;
    randomize: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      tournamentType: number;
      bracketSize: boolean;
      tournamentName: string;
      participants: number;
      teams: string;
      thirdPlace: boolean;
      randomize: boolean;
    }>
  >;
}) => {
  return (
    <div className="my-6">
      <h3 className="text-2xl mb-4 italic font-medium">Unesite ime turnira</h3>
      <input
        type="text"
        name="name"
        placeholder="Ime turnira"
        onChange={(event) =>
          setFormData({ ...formData, tournamentName: event.target.value })
        }
        className="name bg-primary text-lg text-text w-52 px-3 py-2 border-2 border-transparent rounded-md outline-none focus:border-accent focus:border-2 placeholder-white"
      />
    </div>
  );
};

export default Name;
