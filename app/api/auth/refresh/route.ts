import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function refreshAccessToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refresh_token")?.value;

  if (!refreshToken) throw new Error("No refresh token found");

  try {
    const accessTokenResponse = await fetch(
      "https://api.timbu.cloud/auth/refresh-access-token",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `refresh_token=${refreshToken};`,
        },
      }
    );

    if (!accessTokenResponse.ok) {
      throw new Error("Failed to refresh access token");
    }

    const { access_token } = await accessTokenResponse.json();

    if (!access_token) {
      throw new Error("Access token missing in response");
    }

    const isProduction = process.env.NODE_ENV === "production";

    cookieStore.set("access_token", access_token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "strict",
      maxAge: 60 * 15,
      path: "/",
    });

    return access_token;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
}

export async function GET() {
  try {
    const newAccessToken = await refreshAccessToken();
    return NextResponse.json({
      message: "Access token refreshed successfully",
      accessToken: newAccessToken,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Access token refresh failed",
      },
      { status: 401 }
    );
  }
}
