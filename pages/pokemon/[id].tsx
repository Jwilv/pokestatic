import { pokeApi } from "@/api";
import { PokemonSprites } from "@/components/pokemons/pokemonSprites";
import { Pokemon } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from "next";
import { ActiveImg } from '../../components/pokemons/ActiveImg/ActiveImg';
import { ActiveImgProvider } from "@/components/pokemons/ActiveImg/Context/ActiveImgContext";
import { PokemonStats } from "@/components/pokemons/pokemonStats/PokemonStats";
import { PokemonImgs } from "@/components/pokemons/pokemonImgs/PokemonImgs";
import { PokemonDesc } from "@/components/pokemons/pokemonDesc/PokemonDesc";
import { MainLayout } from "@/components/layouts";
import Head from "next/head";

interface Props {
  pokemon: Pokemon
}

const PokemonPage = ({ pokemon }: Props) => {

  const imgDefault = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`

  return (

    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content="app for poke" />
        <meta name='author' content="app for poke" />
      </Head>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', flexWrap: 'wrap' }}>
        <ActiveImgProvider initialImg={imgDefault}>

          <PokemonDesc pokemon={pokemon} />
          <PokemonImgs>
            <ActiveImg />
            <PokemonSprites sprites={pokemon.sprites} imgDefault={imgDefault} />
          </PokemonImgs>

          <PokemonStats {...pokemon} />

        </ActiveImgProvider>
      </div>
    </>

  )
}

PokemonPage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
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