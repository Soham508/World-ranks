"use client"

import React, { Dispatch, SetStateAction } from 'react';
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
import DropIcon from "../../public/Expand_down.svg"
import checkIcon from '../../public/Done_round.svg';
import { FiltersState } from '@/app/page';

const Leftbar = ({ filters, setFilters }: { filters: FiltersState, setFilters: Dispatch<SetStateAction<FiltersState>> }) => {

    const [selected, setSelected] = React.useState("");
    const [status, setStatus] = React.useState({ MemberOfUN: false, Independent: false });

    return (
        <div className='flex flex-col gap-6 h-full'>

            <div className='flex mt-2 flex-col space-y-4'>
                <span className='text-[#6C727F] text-[13px]'>
                    Sort by
                </span>
                <div className=''>
                    <Select onValueChange={(value) => { setFilters({ ...filters, sortBy: value }) }}>
                        <SelectTrigger className="w-[250px] flex justify-between border-2 p-2 rounded-xl focus:text-[#D2D5DA]  active:border-[#282B30] border-[#282B30] text-[#D2D5DA]">
                            <SelectValue className="" placeholder="Population" > {filters.sortBy}</SelectValue>
                            <Image
                                width={24}
                                height={24}
                                src={DropIcon}
                                alt='' />
                        </SelectTrigger>
                        <SelectContent className="pt-2 cursor-pointer bg-[#1B1D1F]">
                            <SelectGroup className='text-[#D2D5DA] flex flex-col gap-3 border p-2 rounded-xl border-[#282B30] w-[250px]'>
                                <SelectItem value="population"> Population </SelectItem>
                                <SelectItem value="area"> Area </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='flex mt-2 flex-col space-y-3 w-full'>
                <span className='text-[#6C727F] text-[13px]'>
                    Region
                </span>
                <div className='w-full flex flex-col gap-2'>
                    <div className='flex space-x-6 ml-1'>
                        <span className='text-[#6C727F] text-[16px] p-2 pl-3 pr-3'>
                            Americas
                        </span>
                        <span className='text-[#D2D5DA] rounded-xl p-2 pl-3 pr-3 bg-[#282B30]  text-[16px] '>
                            Antartica
                        </span>
                    </div>
                    <div className='flex space-x-6 ml-1'>
                        <span className='text-[#6C727F] text-[16px] p-2 pl-3 pr-3'>
                            Africa
                        </span>
                        <span className='text-[#6C727F] text-[16px] p-2 pl-3 pr-3'>
                            Asia
                        </span>
                        <span className='text-[#6C727F] text-[16px] p-2 pl-3 pr-3'>
                            Europe
                        </span>
                    </div>
                    <div className='flex space-x-6 ml-1'>
                        <span className='text-[#6C727F] text-[16px] p-2 pl-3 pr-3'>
                            Oceania
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex mt-2 flex-col space-y-3 w-full'>
                <span className='text-[#6C727F] text-[13px]'>
                    Status
                </span>
                <div className='flex flex-col gap-2 pl-1 pt-0 '>

                    <input type="checkbox" name='Independent' onChange={(e) => {
                        e.preventDefault();
                        setFilters({ ...filters, status: { ...filters.status, Independent: !filters.status.Independent } })
                        setStatus({ ...status, Independent: !status.Independent });
                    }} id="check1" checked={status.Independent} className="hidden" />
                    <label htmlFor="check1" className="flex items-center cursor-pointer">
                        <div className={`w-6 h-6 rounded-lg  mr-2 ${status.Independent ? 'bg-[#4E80EE]' : 'border border-[#6C727F]'}`}>
                            {
                                (status.Independent ? <Image src={checkIcon} height={24} width={24} alt='' /> : "")
                            }
                        </div>
                        <span className="select-none text-[#D2D5DA]">Independent  </span>
                    </label>

                    <input type="checkbox" name='Independent' onChange={(e) => {
                        e.preventDefault();
                        setFilters({ ...filters, status: { ...filters.status, memberOfUN: !filters.status.memberOfUN } })
                        setStatus({ ...status, MemberOfUN: !status.MemberOfUN });
                    }} id="check2" checked={status.Independent} className="hidden" />
                    <label htmlFor="check2" className="flex items-center cursor-pointer">
                        <div className={`w-6 h-6 rounded-lg  mr-2 ${status.MemberOfUN ? 'bg-[#4E80EE]' : 'border border-[#6C727F]'}`}>
                            {
                                (status.MemberOfUN ? <Image src={checkIcon} height={24} width={24} alt='' /> : "")
                            }
                        </div>
                        <span className="select-none text-[#D2D5DA]"> Member of UN </span>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Leftbar
