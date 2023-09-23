import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Card, CardBody } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router"

interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {

  const router = useRouter();

  const { id } = router.query
  return (
      <div>
        <Card>
          <CardBody>
            <Image
              src={pokemon.sprites.front_default} alt="pokemon"
              width={200}
              height={200}
            />
          </CardBody>
        </Card>
      </div>

  )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async () => {

  const pokemonsPaths: string[] = [...Array(151)].map((_value, index) => (`${index + 1}`))

  return {
    paths: pokemonsPaths.map((value) => ({
      params: {
        id: value
      }
    })),
    fallback: false
  }

}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  const { data } = await pokeApi.get<Pokemon>(`pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}