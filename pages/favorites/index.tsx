import { MainLayout } from "@/components/layouts"


const FavoritesPage = () => {
  return (
    <div>FavoritesPage</div>
  )
}

FavoritesPage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default FavoritesPage