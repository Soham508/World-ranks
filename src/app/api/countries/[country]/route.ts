import { NextResponse } from "next/server";
import countriesList from "../../../../lib/countries.json"

export async function GET( request: Request, context:any ) {
    const {params} = context;
    const res:any = countriesList.find((c) => {
      return c.name.common == params.country
    })

    
    //const {name, population, area, region, flags, borders, continents, languages, capital} = JSON.parse(res);

    return NextResponse.json((res? res: "does not ofund"));
  }