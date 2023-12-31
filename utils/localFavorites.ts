

const toggleFavorite = (id: string) => {

    let favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (favorites.includes(id)) {
        favorites = favorites.filter((pokeId: string) => pokeId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    return favorites.includes(id);
}

const getFavorites = (): string[] => {
    const favorites: string[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites;
}

export {
    toggleFavorite,
    getFavorites,
}