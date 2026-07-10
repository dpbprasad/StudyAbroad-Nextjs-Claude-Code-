import { NextResponse, type NextRequest } from 'next/server';
import { SESSION_COOKIE, verifySession } from './lib/session';

/**
 * Gate the whole /admin area behind a valid session. The login page is public.
 * (The protected layout re-checks the session server-side too — defense in depth.)
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Front-end-only deploys don't configure the backend — hide /admin entirely
  // (404) until AUTH_SECRET (and a database) are set on the host.
  if (!process.env.AUTH_SECRET) {
    return new NextResponse(null, { status: 404 });
  }

  if (pathname === '/admin/login') return NextResponse.next();

  const session = await verifySession(req.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    if (pathname !== '/admin') url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
