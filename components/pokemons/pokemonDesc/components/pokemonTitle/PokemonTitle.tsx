import styles from './PokemonTitle.module.css'

interface Props {
    title: string
}

export const PokemonTitle = ( {title} : Props) => {
  return (
    <h1 className={styles.title}>{title.toUpperCase()}</h1>
  )
}
