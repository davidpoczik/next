
import { User } from "./users"

const jwt = require('jsonwebtoken')
const secret = getSecret()

export function getSecret() {
    return process.env.SECRET_KEY || ''
}

export async function createJwtToken(payload: User) {
    try {
        const token = jwt.sign(payload, secret, { expiresIn: '1h' })
        return token
    } catch (error) {
        console.error(`token sign failed: ${error}`)
        return undefined
    }
}

export  function verifyJwtToken(token: string) {
    try {
        const verifiedToken = jwt.verify(token, secret)
        return verifiedToken
    } catch (error) {
        console.error(`token verify failed: ${error}`)
        return undefined
    }
}