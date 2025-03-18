import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {

    const url = new URL(req.url);
    const organization_id = url.searchParams.get("organization_id");
    const product_id = url.searchParams.get("product_id");

    if (!organization_id) {
      return NextResponse.json({ message: "Missing organization_id" }, { status: 400 });
    }

    const token = req.headers.get("authorization");

    const response = await fetch(
      `https://api.timbu.cloud/products/${product_id}?organization_id=${organization_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
