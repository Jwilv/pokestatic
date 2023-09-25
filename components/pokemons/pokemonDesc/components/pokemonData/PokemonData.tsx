import style from './PokemonData.module.css';

import { Ability, Species, Type } from "@/interfaces";

interface Props {
    abilities: Ability[];
    base_experience: number;
    height: number;
    species: Species;
    types: Type[];
    weight: number;
}

export const PokemonData = (data: Props) => {
    return (
        <div className={style.container}>
            <p className={style.description}>
                Abilities: {data.abilities.map(({ ability }) => ability.name).join(", ")}
                <br />
                Base Experience: {data.base_experience}
                <br />
                Height: {data.height}
                <br />
                Weight: {data.weight}
                <br />
                Species: {data.species.name}
                <br />
                Types: {data.types.map((type) => type.type.name).join(" ")}
            </p>
        </div>
    )
}
