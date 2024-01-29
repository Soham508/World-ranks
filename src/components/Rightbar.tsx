"use client"

import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import Countries from "../lib/countries.json";
import { FiltersState } from "../app/page"

export type CountriesType = typeof Countries;
export type CountryType = typeof Countries[0];

const Rightbar = ({ filters, setFilters }: { filters: FiltersState, setFilters: Dispatch<SetStateAction<FiltersState>> }) => {

    const [data, setData] = useState<CountriesType>([]);

    const sortData = (property: string) => {
        const sortedData = [...data].sort((a: CountryType, b: CountryType) => {
            if (property === 'area') {
                return b.area - a.area;
            } else if (property === 'population') {
                return b.population - a.population;
            } else {
                // Handle other cases or return 0 for no change in sorting
                return 0;
            }
        });

        setData(sortedData);
    };

    const filterArray = (independent: Boolean, unMember: Boolean) => {
        const filteredArray = data.filter(item => {
            return item.independent === independent || item.unMember === unMember;
        });
        setData(filteredArray);
    };



    useEffect(() => {
        let filteredData = Countries; // Initialize filtered data with the original data

        // Apply filtering based on the filter status
        if (filters.status.Independent || filters.status.memberOfUN) {
            filteredData = filteredData?.filter(item => {
                return item.independent === filters.status.Independent || item.unMember === filters.status.memberOfUN;
            });
        }

        const filteredCountries = filteredData.filter(country => {
            // If no region is selected, show all countries
            let regions = filters.regions;
            let region: any = country.region;
            if (!Object.values(regions).includes(true)) {
                return true;
            }
            // Filter countries based on selected regions
            return regions[region];
        });

        // Apply sorting based on the sortBy property
        if (filters.sortBy) {
            filteredCountries.sort((a, b) => {
                if (filters.sortBy === 'area') {
                    return b.area - a.area;
                } else if (filters.sortBy === 'population') {
                    return b.population - a.population;
                }
                return 0;
            });
        }

        // Update the state with the filtered and sorted data
        setData([...filteredCountries]);
    }, [filters, data]);

    return (
        <div className='w-[95%] h-full flex bg-[#1B1D1F] flex-col pl-2'>
            <div className='w-full grid grid-cols-9 h-[60px] bg-[#1f2224]'>
                <div className='col-span-1 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Flag
                </div>
                <div className='col-span-2 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Name {filters.sortBy}
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
                    data?.map((country) => (
                        <Link href={`/${country?.name.common}`} key={country?.name.common}>
                            <div className='w-full h-16 grid grid-cols-9' >
                                <div className='col-span-1  flex items-center text-[#D2D5DA] pl-3 bg-[#1B1D1F]'>
                                    <Image className='flex rounded-lg'
                                        src={country?.flags.svg}
                                        width={60}
                                        height={54}
                                        alt="flag" />
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country?.name.common}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country?.population}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country?.area}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3  bg-[#1B1D1F]'>
                                    {country?.region}
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
