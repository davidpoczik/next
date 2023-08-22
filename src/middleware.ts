'use server'
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cookies } from 'next/headers'
import { verifyJwtToken } from "./lib/jwt"

export function middleware(request: NextRequest) {
 if(request.nextUrl.pathname.startsWith('/api')) {

    const authToken = request.cookies.get('authToken')?.value
    if(authToken) {
        try {
             const verifiedToken = verifyJwtToken(authToken)
        } catch(error: any) {
            console.log(error)
            console.log('asd')
        }
    }
 }
}

export const config = {

}