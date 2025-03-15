import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = req.headers.get("authorization");
    const organization_id = url.searchParams.get("organization_id");
    const product_id = url.searchParams.get("product_id");


    const response = await fetch(
      `https://api.timbu.cloud/stocks?product_id=${product_id}&organization_id=${organization_id}`,
      { 
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}
