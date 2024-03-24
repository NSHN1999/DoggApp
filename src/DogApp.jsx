import { BarNav } from "./components/BarNav.jsx";
import { Header} from "./components/Header.jsx";
import { Contador } from "./components/Contador.jsx";
import { useEffect, useState } from "react";
import { GetImageRandom } from "./helpers/GetImageRandom";

export const DogApp = () => {

    const [ image, setImage ] = useState();

    const onImage = async() => {
        const imagenAleatoria = await GetImageRandom();
        setImage(imagenAleatoria);
    }

    useEffect(() => {
        onImage();
    },[]);

    return(
        <div id="container">
            <Header/>
            <BarNav
                imagen={onImage}
                getImagenBreed={setImage}
            />
            <section className="seccion">
                <div className="imagen_aleatoria">
                    <img src={image} className="imagen"/>
                </div>
                <Contador/>
            </section>
        </div>
    );
};
