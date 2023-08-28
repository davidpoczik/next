import { Person } from "@/lib/characters";
import SearchResultListItem from "./searchResultListItem";


export default function SearchResultList({results}: { results: Person[]}) {

     return results.map(person => <SearchResultListItem key={person.name} person={person}></SearchResultListItem>)

}