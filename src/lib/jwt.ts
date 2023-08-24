
import { User } from "./users"

const jwt = require('jsonwebtoken')

export async function getSecret() {
    return process.env.SECRET_KEY || ''
}

export async function createJwtToken(payload: User) {
    const secret = await getSecret()
    console.log('scret', secret)
    const token =  jwt.sign(payload, secret)
    console.log(token, 'token')
    return token
}

export async function verifyJwtToken(token:string, secret: string) {
    console.log(token, secret)
    const verifiedToken =  jwt.verify(token, secret)
    console.log(verifiedToken, 'vrfd token');

    return verifiedToken
}