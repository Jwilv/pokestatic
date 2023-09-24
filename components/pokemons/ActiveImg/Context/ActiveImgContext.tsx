import { createContext } from "react";
import { useActiveImg } from "../hooks/useActiveImg";

interface ActiveImgContext {
    img: string;
    setImgActive: (img: string) => void;
}

export const activeImgContext = createContext<ActiveImgContext>({
    img: '',
    setImgActive: () => {}
});

const { Provider } = activeImgContext;

interface Props {
    children: JSX.Element | JSX.Element[];
    initialImg: string;
}

export const ActiveImgProvider = ({ children, initialImg }: Props) => {

    const { img, setImgActive } = useActiveImg(initialImg);
    return (
        <Provider value={{img, setImgActive}}>
            {children}
        </Provider>
    )
}