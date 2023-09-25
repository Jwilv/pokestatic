
interface Props {
    title : string
}

export const PokemonTitle = ( { title} : Props) => {
  return (

      <h1>{title}</h1>

  )
}
