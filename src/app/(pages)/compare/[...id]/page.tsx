import CompareElement from "@/app/components/compareElement"
import { Suspense } from "react"

export default async function Compare({ params }: { params: { id: string[] } }) {

    const ids: string[] = params.id
    const compparable = ids.map(id => <Suspense key={id} fallback={<div>loading</div>}><CompareElement key={id} id={id} /></Suspense> )

    return (
        <>
        <div className="container">
            <div className="compareList">
        {compparable}
            </div>
        </div>
        </>
    )
}
