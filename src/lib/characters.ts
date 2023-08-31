export type Person = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    gender: string,
    url: string
    id?: string
}


export type PromisePerson = Person | Promise<Person>

export const getPerson = async (id: string) => {
    const result = await fetch(`http://localhost:3000/api/swapi/person/${id}`, { cache: 'force-cache' })
    const person: Person = await result.json()
    return person
}