export type Person = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    gender: string,
    url: string
}

export type PeopleFetch = {
    results: Person[],
    count: number
    nextPage: string
}

export type PromisePerson = Person | Promise<Person>

export async function getPerson(id: string): Person {
    const response = await fetch(`${process.env.SWAPI_URL}${id}`, { cache: 'force-cache'})
    const data = await response.json()

    return data
}