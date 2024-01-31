import { NextResponse } from "next/server";
import countriesList from "../../../../lib/countries.json"

export async function GET( request: Request, context:any ) {

    try{
      const {params} = context;
      const borderList = countriesList['India'].borders;

      return NextResponse.json((borderList? borderList: "not found"));
    }  
    catch(err){
       return NextResponse.json(err);
    }
  }
