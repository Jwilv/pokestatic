import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Head from "next/head"
import Image from "next/image";
import { useRouter } from "next/router";

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

            <main>
                <Navbar shouldHideOnScroll maxWidth="full">
                    <NavbarBrand>
                        <Image
                            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
                            alt="pokemon"
                            width={70}
                            height={70}
                            onClick={onClickBrand}
                            style={{ cursor: 'pointer' }}   
                        />
                        <h3
                            style={{ cursor: 'pointer' }}
                            onClick={onClickBrand}
                        >Pokemon</h3>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Link
                                color="foreground"
                                href="#"
                            >
                                Favoritos
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                {children}
            </main>
        </>
    )
}

export default MainLayout