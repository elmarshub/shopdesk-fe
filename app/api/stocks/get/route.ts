import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization");

    const product_id = "c01eda6c30994c1fb7bba2aad99cf501";
    const organization_id = "b66c4c205e2e44d496217b250fa8a4f5";

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
