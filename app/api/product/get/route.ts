import { NextResponse } from "next/server";




export async function GET(req: Request) {
 
  try {
    const { searchParams } = new URL(req.url);
    const organization_id = searchParams.get("organization_id"); 
    if (!organization_id) {
      return NextResponse.json({ error: "organization_id is required" }, { status: 400 });
    }

    const token = req.headers.get("authorization");

    const response = await fetch(
      `https://api.timbu.cloud/products?organization_id=${organization_id}`,
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
