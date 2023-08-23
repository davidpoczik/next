import { User } from "./users"

const jose = require('jose')

export async function getSecret() {
    console.log(process.env.SECRET_KEY)
    const secretKey = process.env.SECRET_KEY || ''
    const secret = new TextEncoder().encode(secretKey)
}   

export async function createJwtToken(data: User) {
    const secret = await getSecret()
  
    
    const alg = 'HS256'

    const jwt = await new jose.SignJWT(data)
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secret)
        console.log(jwt)
    return jwt
}

export async function verifyJwtToken(token:any) {
    const secret = await getSecret()
    const verifiedToken = await jose.jwtVerify(token, secret)
    console.log(verifiedToken);
    
    const { payload, protectedHeader } = verifiedToken
    return payload
}