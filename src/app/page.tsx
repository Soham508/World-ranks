"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import search from "../../public/Search.svg"
import Leftbar from "@/components/Leftbar";
import Rightbar from "@/components/Rightbar";
import { useState } from "react";

export interface FiltersState {
  sortBy: string;
  status: {
    memberOfUN: Boolean,
    Independent: Boolean,
  };
  regions:
  {
    Asia: Boolean,
    Europe: Boolean,
    Africa: Boolean,
    Americas: Boolean,
    Oceania: Boolean,
    Antarctic: Boolean
  };
}


export default function Home() {

  const [searchQuery, setSearchQuery] = useState<String>('');

  const [filters, setFilters] = useState<FiltersState>({
    sortBy: 'population',
    status: {
      memberOfUN: false,
      Independent: false,
    },
    regions: {
      Asia: false,
      Europe: false,
      Africa: false,
      Americas: false,
      Oceania: false,
      Antarctic: false,
    }
  });

  return (

    <div className="flex flex-col w-[90%] max-lg:w-full max-xl[100%] bottom-14 rounded-xl h-full relative bg-[#1B1D1F] border drop-shadow-lg border-[#282B30] overflow-auto max-lg:overflow-x-hidden">
      <div className="w-full h-[10%] flex flex-row items-center gap-x-4 justify-between bg-[#1B1D1F] ">
        <div className="h-full w-[20%] max-lg:w-auto flex items-center">
          <span className="font-bold pl-12 max-lg:p-2 w-[100%] whitespace-nowrap text-[#6C727F]">
            Found 234 Countries
          </span>
        </div>
        <div className="h-12 flex items-center flex-row w-[25%] max-lg:w-auto max-lg:mr-2 pl-2 rounded-xl bg-[#282B30] mr-6 ">
          <Image
            width={24}
            height={24}
            src={search}
            alt=""
          />
          <Input onChange={(e) => {
            if ((e.target.value).length > 2) {
              return
            } else { setSearchQuery(e.target.value) }
          }}
            className="w-full rounded-xl border text-[#6C727F] border-[#282B30] placeholder:text-[#6C727F] placeholder:text-[16px] text-[16px]" placeholder="Search by Name, Region, Sub-region" />

        </div>
      </div>

      <div className="flex flex-row max-lg:flex-col w-full h-[90%] bg-[#1B1D1F]">

        <div className="h-full w-[25%] max-lg:w-full lg:w-[30%] flex ml-4 max-lg:justify-center bg-[#1B1D1F]">

          <Leftbar filters={filters} setFilters={setFilters} />

        </div>

        <div className="h-full w-[75%] max-lg:w-full lg:w-[70%] bg-[#1B1D1F]">

          <Rightbar filters={filters} setFilters={setFilters} searchQuery={searchQuery} />

        </div>
      </div>
    </div>

  );
}
