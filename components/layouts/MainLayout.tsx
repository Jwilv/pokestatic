import Head from "next/head"
import { useRouter } from "next/router";
import Navbar from "../ui/navbar";

interface Props {
    children: React.ReactNode;
    title?: string;
}

const MainLayout = ({ children, title }: Props) => {

    const router = useRouter();

    const onClickBrand = () => {
        router.push('/');
    }

    return (
        <>
            <Head>
                <title>{title || 'poke app'}</title>
                <meta name="description" content="app for poke" />
                <meta name='author' content="app for poke" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout