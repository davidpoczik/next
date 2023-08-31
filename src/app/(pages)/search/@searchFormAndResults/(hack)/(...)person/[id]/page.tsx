import Modal from "@/app/components/modal"
import PersonItem from "@/app/components/personItem"
import { Person, getPerson } from "@/lib/characters"


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'intercepted person',
  description: 'search with a keyword and check your characters info'
}

export default async function Person({ params }: { params: { id: string } }) {
    const id = params.id
    const person = await getPerson(id)
    person.id = id
    return (
        <Modal>
            <h3>intercepted</h3>
            <PersonItem person={person} isListItem={false}></PersonItem>
        </Modal>
    )
}