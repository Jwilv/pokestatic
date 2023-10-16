import { MainLayout } from "@/components/layouts"
import styles from "../../components/favorites/Favorites.module.css"
import { useState, useEffect } from 'react';
import { getFavorites } from "@/utils/localFavorites";
import { FavoritesList } from "@/components/favorites/FavoritesList";
import { NoFavorites } from "@/components/ui/NoFavorites";


const FavoritesPage = () => {

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);


  return (
    <div className={styles['favorites-container']}>
      {
        favorites.length === 0 ? (
          <NoFavorites />
        )
        : (
          <FavoritesList pokemonsId={favorites} />
        )
      }
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