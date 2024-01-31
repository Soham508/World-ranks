import { NextResponse } from "next/server";

export async function GET() {

    try{
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json();
   
    return NextResponse.json(data);
    }
    catch(error){
      NextResponse.json(error);
    }
  }