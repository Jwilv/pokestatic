import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Head from "next/head"

interface Props {
    children: React.ReactNode;
    title?: string;
}

const MainLayout = ({ children, title }: Props) => {
    return (
        <>
            <Head>
                <title>{title || 'poke app'}</title>
                <meta name="description" content="app for poke" />
                <meta name='author' content="app for poke" />
            </Head>

            <main>
            <Navbar shouldHideOnScroll maxWidth="full">
                <NavbarContent >
                    <NavbarBrand>
                        <h2>P</h2>
                        <h3>okemon</h3>
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
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
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