"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { TbSearch } from "react-icons/tb";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback(
    (query: string) => {
      const params = new URLSearchParams(searchParams);

      if (query) {
        params.set("query", query);
      } else {
        params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  // eslint-disable-next-line no-unused-vars
  const debounce = <T extends (...args: Parameters<T>) => void>(
    fn: T,
    delay: number
  ) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const debouncedSearch = debounce(handleSearch, 300);

  return (
    <label className="flex items-center justify-center w-full bg-body my-5 px-3 border-2 border-accent rounded">
      <TbSearch className="text-[#8e8e8e] text-lg" />
      <input
        type="text"
        placeholder="Unesi ime turnira..."
        className="bg-body w-full p-2 rounded outline-none"
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </label>
  );
};

export default Search;
