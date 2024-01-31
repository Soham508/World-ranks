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

    const handleRegionChange = (region: keyof FiltersState['regions']) => {
        setFilters({
            ...filters,
            regions: {
                ...filters.regions,
                [region]: !filters.regions[region],
            },
        });
    };

    return (
        <div className='flex flex-col gap-6 h-full max-lg:w-full  max-lg:mb-4'>

            <div className='flex mt-2 max-lg:w-full flex-col space-y-4'>
                <span className='text-[#6C727F] text-[13px]'>
                    Sort by
                </span>
                <div className=''>
                    <Select onValueChange={(value) => { setFilters({ ...filters, sortBy: value }) }}>
                        <SelectTrigger className="w-[250px] max-lg:w-[400px] flex justify-between border-2 p-2 rounded-xl focus:text-[#D2D5DA]  active:border-[#282B30] border-[#282B30] text-[#D2D5DA]">
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
                    <div className='flex gap-x-8 max-lg:w-full'>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Americas')
                            }
                        } className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Americas ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Americas
                        </label>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Antarctic')
                            }} className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Antarctic ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Antarctic
                        </label>
                    </div>
                    <div className='flex gap-x-8 max-lg:w-full'>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Asia')
                            }} className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Asia ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Asia
                        </label>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Africa')
                            }} className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Africa ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Africa
                        </label>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Europe')
                            }} className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Europe ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Europe
                        </label>
                    </div>
                    <div className='flex gap-x-8 max-lg:w-full'>

                        <label onClick={
                            (e) => {
                                handleRegionChange('Oceania')
                            }} className={`text-[#6C727F] text-[16px] p-2 ${(filters.regions.Oceania ? 'bg-[#282B30] rounded-xl' : '')} pl-3 pr-3 cursor-pointer`}>
                            Oceania
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex mt-2 flex-col space-y-3 w-full'>
                <span className='text-[#6C727F] text-[13px]'>
                    Status
                </span>
                <div className='flex flex-col w-full max-lg:justify-center gap-2 pl-1 pt-0 '>

                    <input type="checkbox" name='Independent' onChange={(e) => {
                        e.preventDefault();
                        setFilters({ ...filters, status: { ...filters.status, Independent: !filters.status.Independent } })
                        setStatus({ ...status, Independent: !status.Independent });
                    }} id="check1" checked={status.Independent} className="hidden" />
                    <label htmlFor="check1" className="flex max-lg:w-full max-lg:ml-4 flex-row gap-3 items-center cursor-pointer">
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
                    <label htmlFor="check2" className="flex max-lg:w-full max-lg:ml-4 flex-row gap-3 items-center cursor-pointer">
                        <div className={`w-6 h-6 rounded-lg  mr-2 ${status.MemberOfUN ? 'bg-[#4E80EE]' : 'border border-[#6C727F]'}`}>
                            {
                                (status.MemberOfUN ? <Image src={checkIcon} height={24} width={24} alt='' /> : "")
                            }
                        </div>
                        <span className="select-none whitespace-nowrap text-[#D2D5DA]"> Member of UN </span>
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Leftbar
