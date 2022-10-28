import { NextResponse } from "next/server";

import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  console.log(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID);

  const url = request.nextUrl;

  // if (url.pathname.startsWith("/properties") && !url.searchParams.has("c")) {
  //   let countries = [];
  //   await fetch("https://tas-back.herokuapp.com/countries")
  //     .then((res) => res.json())
  //     .then((data) => (countries = data.map((country) => country.countryCode)))
  //     .catch((err) => console.log(err));
  //   console.log(countries);

  //   url.searchParams.set("c", "viewport");
  //   console.log(url.toString());
  //   return NextResponse.redirect(url.toString());
  // }

  if (!url.searchParams.has("c")) {
    url.searchParams.set("c", request.geo.country || "GB");
    return NextResponse.redirect(url.toString());
  }
  return NextResponse.next();
}
