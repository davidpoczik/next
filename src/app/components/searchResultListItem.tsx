'use client'

import { Person } from "@/lib/characters";


import Link from 'next/link'
import PersonItem from "./personItem";

export default function SearchResultListItem({person} : {person: Person}) {
    const id = person.url.split('/').at(-2)
    return (
        <>
        <div className="character-list-item">
            <Link href={`/person/${id}`}>
                <PersonItem person={person} isListItem={true}></PersonItem>
            </Link>
        </div>
        </>
    )
}