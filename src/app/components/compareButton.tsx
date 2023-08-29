'use client'
import { SyntheticEvent, useState } from "react"
import { useCharacterContext } from "../contexts/CharacterContext"
import { RootState } from "../store/authStore"
import { useSelector } from "react-redux"


export default function CompareButton({id} : {id:string}) {
    const userState = useSelector((state: RootState)=> state.user)
    const {user} = userState
    const isLoggedIn = !!user
    const isAdmin = user?.role === 'admin'

    const { addCharacterId, removeCharacterId, isCharacterSelected } = useCharacterContext();

    const [isSelected, setIsSelected] = useState(isCharacterSelected(id));

    const handleToggleSelect = (event: SyntheticEvent) => {
        event.preventDefault()
        if (isSelected) {
          removeCharacterId(id);
        } else {
          addCharacterId(id);
        }
        setIsSelected(!isSelected);
      };

    return (
        <>
        {isLoggedIn && isAdmin ? <button onClick={handleToggleSelect} className="btn btn-primary">{isSelected ? 'Remove' : 'Compare'}</button> : 'Cannot compare'}
        </>
    )
}