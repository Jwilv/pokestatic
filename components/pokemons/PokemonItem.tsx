import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface PokemonItemProps {
    id: number
    name: string
    img: string
}

export const PokemonItem = ({ id, name, img }: PokemonItemProps) => {
    return (
        <Card
            key={id}
            isPressable
            className="poke-card"
        >
            <CardBody
                className="poke-body"
            >
                <Image
                    width={160}
                    height={160}
                    alt={name}
                    className="object-cover h-[140px]"
                    src={img}
                />
            </CardBody>
            <CardFooter
                className="poke-footer"
            >
                <b>#{id} {name}</b>
            </CardFooter>
        </Card>
    )
}
