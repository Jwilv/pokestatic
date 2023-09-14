import Head from "next/head"

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>poke app</title>
                <meta name="description" content="app for poke" />
                <meta name='author' content="app for poke" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout