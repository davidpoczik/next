export default async function SearchFormAndResultsWithKeyword({params}: {params: {keyword: string}}) {
    const results = await fetch(`${process.env.SWAPI_URL}?search=${params.keyword || ''}`, { cache: 'force-cache' })
    const parsedResults: {results: {name:string}[], count: number, nextPage: string} = await results.json()
    
    const list = parsedResults.results.map(el => <div>{el.name}</div>)
    return (
        <>
        <div>
            {list}
        </div>
        </>
    )
}