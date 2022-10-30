import { NextResponse } from "next/server";

import type { NextFetchEvent, NextRequest } from "next/server";

export const config = {
  matcher: "/(properties.*)",
};

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  // console.log(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID);

  const url = request.nextUrl;

  // if (url.pathname.startsWith("/properties") && !url.searchParams.has("countryCode")) {
  //   let countries = [];

  //   console.log(countries);

  //   url.searchParams.set("countryCode", "viewport");
  //   console.log(url.toString());
  //   return NextResponse.redirect(url.toString());
  // }

  if (!url.searchParams.has("countryCode")) {
    let country = request.geo.country;
    if (country) {
      await fetch(`https://tas-back.herokuapp.com/${country}`)
        .then((res) => {
          if (!res.ok) {
            country = "GB";
          }
        })
        .catch(() => {
          country = "GB";
        });
    }
    url.searchParams.set("countryCode", country || "GB");
    return NextResponse.redirect(url);
  }
}
