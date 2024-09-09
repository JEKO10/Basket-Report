"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

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
    <input
      type="text"
      placeholder="Unesi ime turnira..."
      className="bg-accent w-full my-5 py-2 px-3 rounded-md outline-none"
      onChange={(e) => debouncedSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default Search;
