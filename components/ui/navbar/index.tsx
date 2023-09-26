import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link';
import { Brand } from './components/Brand';

const NavbarUi = () => {

    const brandProps = {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        label: 'PokeApp',
        href: '/',
    }

    return (
        <Navbar shouldHideOnScroll maxWidth="full">
            <Brand {...brandProps}/>
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
    )
}

export default NavbarUi
