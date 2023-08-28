import Form from "./components/form"


export default function Layout({
    children
}: {
    searchFormAndResults: React.ReactNode,
    children: React.ReactNode
}) {

    return (
        <>
            <div className="container">
                <Form></Form>
                {children}
            </div>
        </>

    )
}
