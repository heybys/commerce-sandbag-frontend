import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('[Middleware] Request URL:', request.url);
  // console.log('[Middleware] Next URL:', request.nextUrl.pathname);

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
  transpilePackages: ['msw'],
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};
