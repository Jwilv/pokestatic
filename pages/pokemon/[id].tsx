import { useRouter } from "next/router"


 const PokemonPage = () => {

    const router = useRouter();

    const { id } = router.query
  return (
    <div>
    </div>
  )
}

export default PokemonPage
