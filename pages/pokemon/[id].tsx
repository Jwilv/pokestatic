import { pokeApi } from "@/api";
import { PokemonSprites } from "@/components/pokemons/pokemonSprites";
import { Pokemon } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { ActiveImg } from '../../components/pokemons/ActiveImg/ActiveImg';
import { ActiveImgProvider } from "@/components/pokemons/ActiveImg/Context/ActiveImgContext";
import { PokemonStats } from "@/components/pokemons/pokemonStats/PokemonStats";

interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {

  return (
    <ActiveImgProvider initialImg={pokemon.sprites.front_default}>
      <ActiveImg />
      <PokemonSprites imgs={pokemon.sprites}/>
      <PokemonStats stats={pokemon.stats} /> 
    </ActiveImgProvider>

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