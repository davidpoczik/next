import PersonItem from "@/app/components/personItem"
import { getPerson } from "@/lib/characters"



export default async function Person({ params }: { params: { id: string } }) {
    const id = params.id
    const person = await getPerson(id)

    return (
        <div>
            <h3>intercepted</h3>
            <PersonItem person={person}></PersonItem>
        </div>
    )
}