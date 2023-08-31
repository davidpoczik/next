import Back from "@/app/components/back"
import PersonItem from "@/app/components/personItem"
import { getPerson } from "@/lib/characters"
import type { Metadata, ResolvingMetadata } from 'next'


export default async function Person({ params }: Props) {

    const id = params.id
    const person = await getPerson(id)
    if (!person) return
    person.id = id
    return <>
        <div className="container">
            <Back></Back>
        </div>
        <div className="container">
            <PersonItem person={person} isListItem={false}></PersonItem>
        </div>
    </>
}

export async function generateStaticParams() {
    let numberArray = Array.from({ length: 82 }, (_, index) => index + 1);
    const ids = numberArray.map((id) => ({
        id: id.toString(),
    }))
    return ids
}


type Props = { params: { id: string } }

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = params.id
    const person = await getPerson(id)
    return {
        title: person.name
    }
}