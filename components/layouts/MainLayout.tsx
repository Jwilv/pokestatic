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
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout