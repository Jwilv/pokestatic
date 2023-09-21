import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router"

interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {

  const router = useRouter();

  const { id } = router.query
  return (
    <div>
      <h1>{id}</h1>
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

  const pokemon = await pokeApi.get<Pokemon>(`pokemon/${id}`)

  return {
    props: {
      pokemon
    }
  }
}