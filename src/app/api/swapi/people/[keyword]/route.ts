import gql from 'graphql-tag';
import { getClient } from '@/lib/client'
import { NextResponse } from 'next/server'

const client = getClient()



export async function GET(request: Request, { params }: { params: { keyword: string } }) {
  const { keyword } = params
  const query = gql` query {
       people @rest(type: "Person", path: "people/?search=${keyword}") {
        results {
          name
          height
          mass
          hair_color
          gender
          url
        }
    }
  }`

  const results = await client.query({ query })
  return NextResponse.json(results.data.people.results)
}