import { verifyJwtToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    if (token) {
        const decodedToken = await verifyJwtToken(token)
        if(decodedToken) {
            return NextResponse.json({success: true, message: 'token is valid', token: decodedToken}, { status: 200 })
        } else {
            const response = NextResponse.json({success: false, message: 'token is expired or not valid'},{ status: 401 })
            response.cookies.delete('token')
            return response
        }
    } else {
        const response = NextResponse.json({success: false, message: 'token is missing'},{ status: 401 })
        response.cookies.delete('token')
        return response
    }
}