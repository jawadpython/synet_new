import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { resolveSiteRewrite } from "@/lib/site/paths";
import { resolveSolutionsRewrite } from "@/lib/solutions/paths";
import { resolveTrainingRewrite } from "@/lib/training/paths";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    const trainingRewrite = resolveTrainingRewrite(pathname);
    if (trainingRewrite) {
      return NextResponse.rewrite(new URL(trainingRewrite, request.url));
    }

    const solutionsRewrite = resolveSolutionsRewrite(pathname);
    if (solutionsRewrite) {
      return NextResponse.rewrite(new URL(solutionsRewrite, request.url));
    }

    const siteRewrite = resolveSiteRewrite(pathname);
    if (siteRewrite && siteRewrite !== pathname) {
      return NextResponse.rewrite(new URL(siteRewrite, request.url));
    }

    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
