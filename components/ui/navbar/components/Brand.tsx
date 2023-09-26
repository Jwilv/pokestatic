import { NavbarBrand } from "@nextui-org/react"
import Image from "next/image";
import NextLink from 'next/link';

interface Props {
    href : string;
    label : string;
    src : string;
}

export const Brand = ( { href, label, src} : Props) => {
    return (
        <NavbarBrand>
            <NextLink href={href} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Image
                    src={src}
                    alt={label}
                    width={70}
                    height={70}
                />
                <h3>{label}</h3>
            </NextLink>
        </NavbarBrand>
    )
}

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
