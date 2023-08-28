import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Search',
    description: 'Search page for starwars api',
}

export default function Layout({
    searchFormAndResults,
    children
}: {
    searchFormAndResults: React.ReactNode,
    children: React.ReactNode
}) {

    return (
        <>
            <section>
                {children}
            </section>
            <section>

                {searchFormAndResults}
            </section>
        </>

    )
}
