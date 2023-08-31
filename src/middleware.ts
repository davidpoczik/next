import { NextResponse, NextRequest } from 'next/server'

import { verifyJwtToken } from './lib/jwt'

export async function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname)
    const previousUrl = request.headers.get('referer') || ''
    const response = NextResponse

    if (request.nextUrl.pathname === '/') {
        return response.redirect(new URL('/search', request.url))
    }

    const token = request.cookies.get('token')?.value || ''
    const user = token && await verifyJwtToken(token)

    if (request.nextUrl.pathname.startsWith('/compare')) {
        if (user && user.role === 'admin') {
            return NextResponse.next()
        } else {
            console.log('compare not admin')
            return NextResponse.redirect(new URL('/search', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/person')) {
        if (user) {
            return NextResponse.next()
        } else {
            console.log('person not user')

            return NextResponse.redirect(new URL(previousUrl, request.url))
        }
    }
    console.log('basic redirect')
    return NextResponse.next()
}

export const config = {
    matcher: ['/search/:path*', '/compare/:path*', '/person/:path*', '/api/:path*', '/'],

  }