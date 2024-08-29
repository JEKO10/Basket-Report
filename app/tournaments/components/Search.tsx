"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Unesi ime turnira..."
      className="bg-accent w-full my-5 py-2 px-3 rounded-md outline-none placeholder-[#2f6feb]"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default Search;
