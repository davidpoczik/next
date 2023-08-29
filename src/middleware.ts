import { NextResponse, NextRequest } from 'next/server'

import { verifyJwtToken } from './lib/jwt'

export async function middleware(request: NextRequest) {
    const response = NextResponse

    if (request.nextUrl.pathname === '/') {
        return response.redirect(new URL('/search', request.url))
    }

    const token = request.cookies.get('token')?.value || ''
    const user = await verifyJwtToken(token)

    if (request.nextUrl.pathname.startsWith('/compare')) {
        if (user && user.role === 'admin') {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/search', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/person')) {
        if (user) {
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/search', request.url))
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '',
}

