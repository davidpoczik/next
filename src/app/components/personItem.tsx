import { Person } from "@/lib/characters";
import CompareButton from "./compareButton";

export default function PersonItem({ person }: { person: Person }) {
    return (
        <div>
            <div>
                name: {person.name}
            </div>
            <div>
                gender: {person.gender}
            </div>
            <div>
                hair color:   {person.hair_color}
            </div>
            <div>
                height: {person.height}
            </div>
            <div>
                mass: {person.mass}
            </div>
            <div>
                <CompareButton></CompareButton>
            </div>
        </div>
    )
}