
import { User } from "./users"

import {SignJWT, jwtVerify} from 'jose';

export function getSecret() {
    return process.env.SECRET_KEY || ''
}

export async function createJwtToken(payload: User) {
    try {
        const secret = new TextEncoder().encode(getSecret())
        const alg = "HS256"
        const token = new SignJWT(payload)
                        .setProtectedHeader({alg})
                        .setIssuedAt()
                        .setIssuer('urn:example:issuer')
                        .setAudience('urn:example:audience')
                        .setExpirationTime('2h')
                        .sign(secret)
        return token
    } catch (error) {
        console.error(`token sign failed: ${error}`)
        return undefined
    }
}

export  async function verifyJwtToken(token: string): Promise<User| undefined>{
    try {
        const secret = new TextEncoder().encode(getSecret())
        const {payload} = await jwtVerify(token, secret);
        const user: User = payload
        return user
    } catch (error) {
        console.error(`token verify failed: ${error}`)
        return undefined
    }
}