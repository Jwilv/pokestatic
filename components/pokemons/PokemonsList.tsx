import { SmallPokemon } from "@/interfaces"


interface PokemonListProps {
    pokemons : SmallPokemon[]
}
export const PokemonsList = ( { pokemons }: PokemonListProps) => {
  return (
    <div 
    className="poke-container"
    >
      
      {
        pokemons.map(({ id, name, img }) => (
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
            <CardFooter className="poke-footer">
              <b>#{id} {name}</b>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}
