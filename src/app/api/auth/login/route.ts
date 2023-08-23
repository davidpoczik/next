import { NextRequest, NextResponse } from "next/server";
import users from '@/data/users.json'
import { isValidUser } from "@/lib/users";
import { createJwtToken } from "@/lib/jwt";


export async function POST(request: NextRequest, context: {}) {
    const data  =  await request.json()
    const validUser = isValidUser(users, data)
    if(validUser) {    
        delete validUser.password
        const token = await createJwtToken(validUser)
        return NextResponse.json({token: token}, {status: 200})
    } else {
        return NextResponse.json({}, {status: 401});
    }
}