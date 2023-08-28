import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJwtToken } from './lib/jwt'
const publicRoutes = ['search']
const userRoutes = ['person']
const adminRoutes = ['compare']

export async function middleware(request: NextRequest) {

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/search', request.url))
  }
  console.log(request)

  const token = request.cookies.get('token')?.value
    if (token) {
      const user = await verifyJwtToken(token)
      user && console.log('token is valid')
      !user && console.log('invalid token')
    } else {
        console.log('token is missing')

    }


  if (request.nextUrl.pathname.startsWith('/compare')) {


  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '',
}

