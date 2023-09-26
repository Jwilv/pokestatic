import { Navbar, NavbarContent } from '@nextui-org/react'
import { Brand } from './components/Brand';
import { Item } from './components/Item';

const NavbarUi = () => {

    const brandProps = {
        src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        label: 'PokeApp',
        href: '/',
    }

    return (
        <Navbar shouldHideOnScroll maxWidth="full">
            <Brand {...brandProps} />
            <NavbarContent justify="end">
                <Item href="/favorites" label="Favorites" />
            </NavbarContent>
        </Navbar>
    )
}

export default NavbarUi
