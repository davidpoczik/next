
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, context: {}) {

    request.cookies.delete('token')
    const response =  new NextResponse('Logout', {
        status: 200
    })
    response.cookies.delete('token')
    return response
}