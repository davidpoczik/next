const fetchCharacters = async () => {
    const fetchResponse = await fetch(`http://localhost:3000/api/search/`, {
        cache: 'force-cache'
    })
    const characterList = await fetchResponse.json()
    
    return characterList
}


const fetchPeople = async (searchTerm?: string) => {
    const response = 
    await fetch(`https://swapi.dev/api/people${searchTerm ? '?search='+ searchTerm : ''}`, {
        cache: 'force-cache'
    })
    const json = await response.json()
    return json
}

const fetchCharacter = async (id?: string, storeType = { cache: 'force-cache' }) => {
    const response = 
    await fetch(`https://swapi.dev/api/people/${id}`, {
        cache: 'force-cache'
    })
    const json = await response.json()
    return json
}

export { fetchCharacters, fetchPeople, fetchCharacter }

