import { verifyJwtToken } from '@/lib/jwt'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
    const response =  NextResponse

    const token = cookies().get('token')?.value
    if(token) {
        const user = await verifyJwtToken(token)
        console.log(user)
        response.json({user}, {status: 200})
    }
    return response
}