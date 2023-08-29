'use client'

import Link from "next/link"
import { useCharacterContext } from "../contexts/CharacterContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/authStore";

export default function Footer() {

    const { selectedCharacterIds,  clearCharacterIds } = useCharacterContext();
    const userState = useSelector((state: RootState) => state.user)

    if (selectedCharacterIds.length === 0) {
        return null; // Don't display the list if there are no selected characters
    }

    const { user } = userState
    const isLoggedIn = !!user
    const isAdmin = user?.role === 'admin'

    const compareUrl = `/compare/${selectedCharacterIds.join('/')}`

    const onClickHandler = () => {
        clearCharacterIds()
    }
    return (
        <>
            {isLoggedIn && isAdmin &&
                <div className="floatingList">
                    <h3>Comparable Characters:</h3>
                    <ul>
                        {selectedCharacterIds.map((characterId: string) => (
                            <li key={characterId}>{characterId}</li>
                        ))}
                    </ul>
                    <Link href={compareUrl} onClick={onClickHandler}>
                        <span className="btn btn-primary">Compare</span>
                    </Link>
                </div>
            }
        </>
    )
}