import styles from './PokemonImgs.module.css'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PokemonImgs = ({ children }: Props) => {
    return (
        <div className={styles.containerImgs}>
            {children}
        </div>
    )
}
