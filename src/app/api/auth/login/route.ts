
import users from '@/data/users.json'
import { createJwtToken } from "@/lib/jwt";
import { isValidUser } from '@/lib/users';
import { NextRequest, NextResponse } from 'next/server';




export async function POST(request: NextRequest, context: {}) {
    const data = await request.json()
    const validUser = isValidUser(users, data)
    if (validUser) {
        const userWithoutPassword = {...validUser}
        userWithoutPassword.password = ''
        const token = await createJwtToken(userWithoutPassword)
        const response = NextResponse.json({ success: true, user: userWithoutPassword }, { status: 200 })
        response.cookies.set({
            name: 'token',
            value: token,
            expires: 3600,
            maxAge: 3600
        })
        return response
    } else {
        return NextResponse.json({ success: false }, { status: 401 });
    }
}