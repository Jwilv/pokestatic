import { useState, useEffect } from 'react';
import { toggleFavorite } from '../../utils/localFavorites'
import styles from './ButtonFav.module.css'
import { useRouter } from 'next/router'

export const ButtonFav = () => {

    const router = useRouter();

    const id = router.query.id as string;

    const handleInitialValue = (): boolean => {
        const result = JSON.parse(localStorage.getItem("favorites") || "[]");
        return result.includes(id);
    }

    const [like, setLike] = useState(false);

    useEffect(() => {
        setLike(handleInitialValue());
    }, []);

    const handleToggle = () => {
        toggleFavorite(id);
        setLike(!like);
    }

    return (
        <button
            onClick={handleToggle}>
            {
                like ?
                    <i className="fa-solid fa-heart" style={{ color: "#ff0000", }}></i>
                    :
                    <i className="fa-regular fa-heart" style={{ color: "#ff0000", }}></i>
            }
        </button>
    )
}
