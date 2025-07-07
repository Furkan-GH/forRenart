import { NextResponse } from "next/server";


export async function GET() {
  try {
    const myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-kn2o8vsmct1yw4w-io");
    myHeaders.append("Content-Type", "application/json");
    const api =  await fetch("https://www.goldapi.io/api/XAU/USD", {
        method:'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const data = await api.json();
    console.log("GET GET GET ****:",data.price_gram_24k );
    return new NextResponse(JSON.stringify(data.price_gram_24k), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
