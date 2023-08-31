import gql from 'graphql-tag';
import { getClient } from '@/lib/client'
import { NextResponse } from 'next/server'

const client = getClient()



export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const query = gql` query {
    person @rest(type: "Person", path: "people/${id}/") {
        name
        height
        mass
        hair_color
        gender
        url
    }
  }`

    const results = await client.query({ query })
    const person = results.data.person
    return NextResponse.json(person)
}