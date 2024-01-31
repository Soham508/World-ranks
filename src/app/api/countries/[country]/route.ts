import { NextResponse } from "next/server";
import countriesList from "../../../../lib/countries.json"
import { CountryType } from '../../../../components/Rightbar';

export async function GET( request: Request, context:any ) {
    try{ 
       interface resType{
        country:CountryType,
        border: String[],
      }

    const res:resType = {country: null, border:[]}
    const {params} = context;

    res.country = await countriesList.find((c) => {
      return c.name.common == params.country
    })

    let borders = countriesList.filter((c) => {
       return res.country.borders.includes(c.cioc);
    })
    
    res.border = borders.map((country) => {
       return country.flags.png;
    })

    return NextResponse.json((res? res: "does not ofund"));
  }
  catch(err){
    NextResponse.json(err);
  }
  }

