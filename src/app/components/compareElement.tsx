import { getPerson } from "@/lib/characters"
import PersonItem from "./personItem"

export default async function CompareElement({ id }: { id: string }) {
    const person = await getPerson(id)
    return <>
        <PersonItem person={person} isListItem={false}></PersonItem>
    </>

}