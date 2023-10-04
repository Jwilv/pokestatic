import styles from './ButtonFav.module.css'

export const ButtonFav = () => {
    return (
        <button>
            <i className="fa-regular fa-heart" style={{ color: "#ff0000", }}></i>
            <i className="fa-solid fa-heart" style={{ color: "#ff0000", }}></i>
        </button>
    )
}
