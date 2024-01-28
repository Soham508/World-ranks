"use client"

import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import Countries from "../lib/countries.json"

const Rightbar = () => {

    const [data, setData] = useState(Countries);

    const countries = [
        { name: "USA", population: 328_200_000, area: 9_826_675, language: "English", capital: "Washington, D.C." },
        { name: "China", population: 1_394_015_977, area: 9_596_961, language: "Mandarin", capital: "Beijing" },
        { name: "India", population: 1_326_093_247, area: 3_287_263, language: "Hindi", capital: "New Delhi" },
        { name: "Brazil", population: 211_049_527, area: 8_515_767, language: "Portuguese", capital: "Brasília" },
        { name: "Russia", population: 146_793_744, area: 17_098_242, language: "Russian", capital: "Moscow" },
        { name: "Japan", population: 125_584_838, area: 377_975, language: "Japanese", capital: "Tokyo" },
        { name: "Germany", population: 83_783_942, area: 357_022, language: "German", capital: "Berlin" },
        { name: "Mexico", population: 126_577_691, area: 1_964_375, language: "Spanish", capital: "Mexico City" },
        { name: "France", population: 65_273_511, area: 551_695, language: "French", capital: "Paris" },
        { name: "Canada", population: 37_694_085, area: 9_984_670, language: "English/French", capital: "Ottawa" },
        { name: "Australia", population: 25_499_884, area: 7_692_024, language: "English", capital: "Canberra" }
    ];

    return (
        <div className='w-[95%] h-full flex bg-[#1B1D1F] flex-col pl-2'>
            <div className='w-full grid grid-cols-9 h-[60px] bg-[#1f2224]'>
                <div className='col-span-1 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Flag
                </div>
                <div className='col-span-2 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Name
                </div>
                <div className='col-span-2 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Population
                </div>
                <div className='col-span-2 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Area{'(km square)'}
                </div>
                <div className='col-span-2 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Region
                </div>
            </div>

            <div className='h-[3px] rounded-lg w-full bg-[#282B30]' />

            <div className='w-full overflow-auto h-full bg-[#1B1D1F] '>
                {
                    data.map((country) => (
                        <Link href={`/${country.name.common}`} key={country.name.common}>
                            <div className='w-full h-16 grid grid-cols-9' >
                                <div className='col-span-1  flex items-center text-[#D2D5DA] pl-3 bg-[#1B1D1F]'>
                                    <Image className='flex rounded-lg'
                                        src={country.flags.svg}
                                        width={60}
                                        height={54}
                                        alt="flag" />
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country.name.common}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country.population}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country.area}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country.region}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>


        </div>
    )
}

export default Rightbar
