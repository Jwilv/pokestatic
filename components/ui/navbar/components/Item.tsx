import { NavbarItem } from "@nextui-org/react"
import Link from "next/link";

interface Props {
    href: string;
    label: string;
}

export const Item = ({ href, label }: Props) => {
    return (
        <NavbarItem>
            <Link color="foreground" href={href}>
                {label}
            </Link>
        </NavbarItem>
    )
}
