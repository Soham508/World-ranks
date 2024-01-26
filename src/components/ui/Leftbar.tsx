"use client"

import React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@radix-ui/react-select";
import Image from 'next/image';
import Dropdown from "../../../public/Expand_down.svg"

const Leftbar = () => {

    const [selected, setSelected] = React.useState("");


    return (
        <div className='flex flex-col gap-6 h-full'>

            <div className='flex mt-2 flex-col space-y-2'>
                <span className='text-[#6C727F] text-[13px]'>
                    Sort by
                </span>
                <div className=''>
                    <Select onValueChange={(value) => { setSelected(value) }}>
                        <SelectTrigger className="w-[250px] flex justify-between border-2 p-2 rounded-xl focus:text-[#D2D5DA]  active:border-[#282B30] border-[#282B30] text-[#D2D5DA]">
                            <SelectValue className="" placeholder="Population" > {selected}</SelectValue>
                            <Image
                                width={24}
                                height={24}
                                src={Dropdown}
                                alt='' />
                        </SelectTrigger>
                        <SelectContent className="pt-2 cursor-pointer bg-[#1B1D1F]">
                            <SelectGroup className='text-[#D2D5DA] flex flex-col gap-3 border p-2 rounded-xl border-[#282B30] w-[250px]'>
                                <SelectItem value="Population"> Population </SelectItem>
                                <SelectItem value="Area"> Area </SelectItem>
                                <SelectItem value="Economy"> Economy </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex mt-2 flex-col space-y-3 w-full'>
                <span className='text-[#6C727F] text-[13px]'>
                    Region
                </span>
                <div className='w-full flex flex-col gap-4'>
                    <div className='flex space-x-10 ml-1'>
                        <span className='text-[#6C727F] text-[16px] p-1'>
                            Americas
                        </span>
                        <span className='text-[#D2D5DA] rounded-xl p-2 pl-3 pr-3 bg-[#282B30]  text-[16px] '>
                            Antartica
                        </span>
                    </div>
                    <div className='flex space-x-10 ml-1'>
                        <span className='text-[#6C727F] text-[16px] '>
                            Africa
                        </span>
                        <span className='text-[#6C727F] text-[16px] '>
                            Asia
                        </span>
                        <span className='text-[#6C727F] text-[16px] '>
                            Europe
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar
