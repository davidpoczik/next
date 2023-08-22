import { User } from "./users"

const jose = require('jose')

function getSecret() {
    return new TextEncoder().encode(
        process.env.SECRET_KEY,
    )
}

export async function createJwtToken(data: User) {
    const secret = getSecret()
    const alg = 'HS256'

    const jwt = await new jose.SignJWT(data)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret)
    return jwt
}

export async function verifyJwtToken(token:any) {
    const jwt = token+='asd'
    const  verifiedToken = await jose.jwtVerify(jwt, getSecret())
    console.log(verifiedToken)
    const { payload, protectedHeader } = verifiedToken
    return payload
}