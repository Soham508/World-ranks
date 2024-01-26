"use client"

import Image from "next/image";
import { Input } from "@/components/ui/input";
import search from "../../public/Search.svg"
import Leftbar from "@/components/ui/Leftbar";


export default function Home() {
  return (
    <div className="flex flex-col w-[90%] bottom-14 rounded-xl h-full relative bg-[#1B1D1F] border drop-shadow-lg border-[#282B30] overflow-auto">
      <div className="w-full h-[10%] flex flex-row items-center justify-between bg-[#1B1D1F] ">
        <div className="h-full w-[20%] flex items-center">
          <span className="font-bold pl-12  text-[#6C727F]">
            Found 234 Countries
          </span>
        </div>
        <div className="h-12 flex items-center flex-row w-[25%] pl-2 rounded-xl bg-[#282B30] mr-6">
          <Image
            width={24}
            height={24}
            src={search}
            alt=""
          />
          <Input className="w-full rounded-xl border text-[#6C727F] border-[#282B30] placeholder:text-[#6C727F] placeholder:text-[16px]" placeholder="Search by Name, Region, Sub-region" />
        </div>
      </div>

      <div className="flex flex-row w-full h-[90%] bg-[#1B1D1F]">

        <div className="h-full w-[25%] flex justify-center bg-[#1B1D1F]">

          <Leftbar />

        </div>

        <div className="h-full w-[75%] bg-[#1f2224]">

        </div>
      </div>
    </div>
  );
}
