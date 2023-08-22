import { NextRequest, NextResponse } from "next/server";
import users from '@/data/users.json'
import { isValidUser } from "@/lib/users";
import { createJwtToken } from "@/lib/jwt";


export async function POST(request: NextRequest, context: {}) {
    const data  =  await request.json()

    const validUser = isValidUser(users, data)

    if(validUser) {
        const response = NextResponse.json({success: true}, {status: 200})
        delete validUser.password
        const token = await createJwtToken(validUser)
        response.cookies.set('authToken', token, { maxAge: 7200 })
        return response
    }

    return NextResponse.json({success: false}, {status: 401});

}