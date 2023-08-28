import PersonItem from "@/app/components/personItem"
import { getPerson } from "@/lib/characters"


export default async function Person({ params }: { params: { id: string } }) {
    const id = params.id
    const person = await getPerson(id)

    return <>
    <div className="container">
    <PersonItem person={person} isListItem={false}></PersonItem>
    </div>
    </>
}