import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { GetStaticPaths, GetStaticProps } from 'next';
import { ActiveImg } from "@/components/pokemons/ActiveImg/ActiveImg";
import { ActiveImgProvider } from "@/components/pokemons/ActiveImg/Context/ActiveImgContext";
import { PokemonDesc } from "@/components/pokemons/pokemonDesc/PokemonDesc";
import { PokemonImgs } from "@/components/pokemons/pokemonImgs/PokemonImgs";
import { PokemonSprites } from "@/components/pokemons/pokemonSprites";
import { PokemonStats } from "@/components/pokemons/pokemonStats/PokemonStats";
import Head from "next/head";
import { MainLayout } from "@/components/layouts";
import { getPokemonData } from "@/utils/getPokemondata";

interface Props {
    pokemon: Pokemon
}

const PokemonByNamePage = ({ pokemon }: Props) => {
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

PokemonByNamePage.getLayout = (page: JSX.Element) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151');
    return {
        paths: data.results.map((pokemon) => ({
            params: {
                name: pokemon.name,
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

    const pokemon = await getPokemonData(name);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        }
    }
}



export default PokemonByNamePage 
