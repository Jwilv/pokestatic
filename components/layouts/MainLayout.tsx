import Head from "next/head"
import { useRouter } from "next/router";
import Navbar from "../ui/navbar";

interface Props {
    children: React.ReactNode;
    title?: string;
}

const location = (typeof window === 'undefined') ? '' : window.location.origin

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

                <meta property="og:title" content={`${title || 'poke app'}`} />
                <meta property="og:description" content={`Esta es la pagima de ${title || 'poke app'}`} />
                <meta property="og:image" content={`${location}/img/banner.png`}/>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout