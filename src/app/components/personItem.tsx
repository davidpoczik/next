import { Person } from "@/lib/characters";
import CompareButton from "./compareButton";

export default function PersonItem({ person, isListItem }: { person: Person | undefined, isListItem: boolean }) {
    return (
        <>
            <div className="character-card">
                <div>
                    <h4>
                        {person?.name}
                    </h4>
                    {!isListItem && <div>
                        <p>
                            gender: {person?.gender}
                        </p>
                        <p>
                            hair color: {person?.hair_color}
                        </p>
                        <p>
                            height: {person?.height}
                        </p>
                        <p>
                            mass: {person?.mass}
                        </p>

                    </div>}
                    <p>
                            <CompareButton id={person?.id || ''}></CompareButton>
                        </p>

                </div>
            </div>
        </>
    )
}