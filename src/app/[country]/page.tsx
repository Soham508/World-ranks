"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import flag from "../../../public/Screenshot 2024-01-27 204329.jpg"
import axios from 'axios';
const Page = ({ params }: { params: { country: string } }) => {


    const [country, setCountry] = useState<any>();

    useEffect(() => {
        async function fetchCountry(param: string) {
            const res = await axios.get(`http://localhost:3000/api/countries/${param}`);
            const data = res.data;
            setCountry({
                name: data.name,
                population: data.population,
                area: data.area,
                capital: data.capital,
                subregion: data.subregion,
                languages: Object.values(data.languages).join(', '),
                currencies: Object.values(data.currencies)[0].name,
                continents: data.continents.join(', '),
                borders: data.borders,
                flags: data.flags,
            });
        }
        fetchCountry(params.country);

    }, [params])

    useEffect(() => {
        console.log(country); // Log the updated country state
    }, [country]);

    return (
        <div className="flex flex-col gap-6 w-[50%] bottom-14 rounded-xl h-[1000px]  relative bg-[#1B1D1F] border drop-shadow-xl border-[#282B30] ">
            <div className='flex w-full h-[30%]  relative items-center  flex-col'>
                <div className='flex rounded-lg h-auto w-auto bottom-10 relative'>
                    <Image src={country?.flags.svg} className='h-[200px] w-[260px] rounded-xl' width={450} height={450} alt='' />
                </div>
                <h1 className='text-[34px] mt-[-10px] font-semibold text-[#D2D5DA]'> {country?.name.common} </h1>
                <span className='text-md text-[#D2D5DA]'>{country?.name.official} </span>
            </div>

            <div className='flex flex-row justify-center gap-10 w-full mt-[-30px] h-[10%]  items-center'>
                <span className='text-[#D2D5DA] rounded-xl flex justify-center items-center p-[10px] pr-6 pl-6  bg-[#282B30]  text-[15px] '>
                    Population  <div className='h-7 w-[1px] ml-2  mr-2 bg-[#1B1D1F]' /> {country?.population}
                </span>
                <span className='text-[#D2D5DA] rounded-xl flex justify-center items-center p-[10px] pr-6 pl-6 bg-[#282B30]  text-[15px] '>
                    Area{'(square km)'}  <div className='h-7 w-[1px] ml-2  mr-2 bg-[#1B1D1F]' /> 130,000
                </span>
            </div>
            <div className='flex w-full flex-col'>
                <div className='w-full bg-[#282B30] h-[1px] ' />
                <div className='flex flex-row justify-between pl-8 pr-8 p-6'>
                    <span className='text-[#6C727F] text-md'> Capital</span>
                    <span className='text-[#D2D5DA] text-md'> {country?.capital}</span>
                </div>
                <div className='w-full bg-[#282B30] h-[1px] ' />
                <div className='flex flex-row justify-between pl-8 pr-8 p-6'>
                    <span className='text-[#6C727F] text-md'> Subregion</span>
                    <span className='text-[#D2D5DA] text-md'> {country?.subregion}</span>
                </div>
                <div className='w-full bg-[#282B30] h-[1px] ' />
                <div className='flex flex-row justify-between pl-8 pr-8 p-6'>
                    <span className='text-[#6C727F] text-md'> Language </span>
                    <span className='text-[#D2D5DA] text-md'> {country?.languages} </span>
                </div>
                <div className='w-full bg-[#282B30] h-[1px] ' />
                <div className='flex flex-row justify-between pl-8 pr-8 p-6'>
                    <span className='text-[#6C727F] text-md'> Currencies</span>
                    <span className='text-[#D2D5DA] text-md'> {country?.currencies} </span>
                </div>
                <div className='w-full bg-[#282B30] h-[1px] ' />
                <div className='flex flex-row justify-between pl-8 pr-8 p-6'>
                    <span className='text-[#6C727F] text-md'> Continents</span>
                    <span className='text-[#D2D5DA] text-md'> {country?.continents}</span>
                </div>
                <div className='w-full bg-[#282B30] h-[1px] ' />
            </div>
            <div className='flex flex-col '>
                <span className='text-[#6C727F] self-start pl-8 text-md'> Neighboring countries</span>
                <div className='flex flex-row gap-3 '>

                </div>
            </div>
        </div>
    )
}

export default Page;