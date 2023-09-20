import { pokeApi } from "@/api";
import { MainLayout } from "@/components/layouts";
import { PokemonsList } from "@/components/pokemons/PokemonsList";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { GetStaticProps } from "next";
import Image from "next/image";

interface HomePageProps {
  getLayout: (page: JSX.Element) => JSX.Element
}

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: HomePageProps = ({ pokemons }: Props) => {

  return (
    <PokemonsList pokemons={pokemons} /> 
  )
}

HomePage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

interface StaticProps {
  props: {
    [key: string]: any;
  }
}

export const getStaticProps: GetStaticProps = async (ctx): Promise<StaticProps> => {

  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => (
    {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }
  ))
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage