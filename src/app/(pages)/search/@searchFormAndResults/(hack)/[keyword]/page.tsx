import Back from "@/app/components/back"
import SearchResultList from "@/app/components/searchResultList"
import { Person } from "@/lib/characters"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Page',
  description: '...',
}


export default async function SearchFormAndResultsWithKeyword({params}: {params: {keyword: string}}) {

    const results = await fetch(`http://localhost:3000/api/swapi/people/${params.keyword}`, { cache: 'force-cache' })

    const people: Person[] = await results.json()

    return (
        <>
        <div>
            <Back></Back>
            <SearchResultList results={people}></SearchResultList>
        </div>
        </>
    )
}