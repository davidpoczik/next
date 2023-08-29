import SearchResultList from "@/app/components/searchResultList"
import { PeopleFetch } from "@/lib/characters"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Page',
  description: '...',
}


export default async function SearchFormAndResultsWithKeyword({params}: {params: {keyword: string}}) {

    const results = await fetch(`${process.env.SWAPI_URL}?search=${params.keyword || ''}`, { cache: 'force-cache' })

    const parsedResult: PeopleFetch = await results.json()
    const people = parsedResult.results

    return (
        <>
        <div>
            <SearchResultList results={people}></SearchResultList>
        </div>
        </>
    )
}