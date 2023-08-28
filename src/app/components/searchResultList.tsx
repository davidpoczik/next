import { Person } from "@/lib/characters";
import SearchResultListItem from "./searchResultListItem";


export default function SearchResultList({ results }: { results: Person[] }) {

     return (<>
          <div className="search-results">
               <div className="character-list">
                    {results.map(person => <SearchResultListItem key={person.name} person={person}></SearchResultListItem>)}
               </div>
          </div>
     </>)
}