"use client"

import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image'
import Countries from "../lib/countries.json";
import { FiltersState } from "../app/page";

export type CountriesType = typeof Countries;
export type CountryType = typeof Countries[0];

const Rightbar = ({ filters, setFilters, searchQuery }: { filters: FiltersState, setFilters: Dispatch<SetStateAction<FiltersState>>, searchQuery: String }) => {

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
        let filteredData = Countries; //setting a temporary variable for filtered output to set into state later

        // Apply filtering based on the filter status
        if (filters.status.Independent || filters.status.memberOfUN) {
            filteredData = filteredData?.filter(item => {
                return item.independent === filters.status.Independent || item.unMember === filters.status.memberOfUN;
            });
        }

        let filteredCountries = filteredData.filter(country => {
            // To show all countries, If no region is selected 
            let regions = filters.regions;
            let region: any = country.region;
            if (!Object.values(regions).includes(true)) {
                return true;
            }
            // Filter countries based on selected regions
            return regions[region];
        });

        // sorting based on the sortBy property
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

        let finalFiltered = filteredCountries.filter(country => {
            const searchLowerCase = searchQuery.toLowerCase();
            const countryNameLowerCase = country.name.common.toLowerCase();
            const countryRegionLowerCase = country.region.toLowerCase();
            const countrySubregionLowerCase = country.subregion?.toLowerCase();

            return (
                countryNameLowerCase.startsWith(searchLowerCase) || countryRegionLowerCase.startsWith(searchLowerCase) || countrySubregionLowerCase?.startsWith(searchLowerCase)
            );
        });

        // Update the state with the filtered and sorted data
        setData([...finalFiltered]);
    }, [filters, data, searchQuery]);


    return (
        <div className='w-[95%] max-lg:w-full h-full flex bg-[#1B1D1F] flex-col pl-2'>
            <div className='w-full grid max-lg:grid-cols-7 grid-cols-9 h-[60px] bg-[#1f2224]'>
                <div className='col-span-1 text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'  >
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
                <div className='col-span-2 max-lg:hidden text-[14px] flex items-center text-[#6C727F] pl-3  bg-[#1B1D1F]'>
                    Region
                </div>
            </div>

            <div className='h-[3px] rounded-lg w-full bg-[#282B30]' />

            <div className='w-full overflow-auto h-full bg-[#1B1D1F] '>
                {
                    data?.map((country) => (
                        <Link key={country?.name.common} href={`/${country?.name.common}`}>
                            <div key={country.name.common} className='w-full h-16 grid max-lg:grid-cols-7 grid-cols-9 hover:bg-[#282B30]' >
                                <div className='col-span-1  flex items-center text-[#D2D5DA] pl-3 '>
                                    <Image className='flex rounded-lg'
                                        src={country?.flags.svg}
                                        width={60}
                                        height={54}
                                        alt="flag" />
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3 '>
                                    {country?.name.common}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3 '>
                                    {country?.population}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3 '>
                                    {country?.area}
                                </div>
                                <div className='col-span-2 text-[16px] flex items-center text-[#D2D5DA] pl-3 max-lg:hidden'>
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
