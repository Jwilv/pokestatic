import { MainLayout } from "@/components/layouts"
import styles from "../../components/favorites/Favorites.module.css"
import { useState, useEffect } from 'react';
import { getFavorites } from "@/utils/localFavorites";
import { PokemonItem } from "@/components/pokemons/PokemonItem";


const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);


  return (
    <div className={styles['favorites-container']}>
      <div className={styles.favorites}>
        {
          favorites.map((id) => (
            <PokemonItem key={id} id={id} />
          ))
        }

      </div>
    </div>
  )
}

FavoritesPage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout title="Favorites">
      {page}
    </MainLayout>
  )
}

export default FavoritesPage