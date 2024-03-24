import PropTypes from "prop-types";
import { ButtonImagenAleatoria } from "./ButtonImagenAleatoria";
import { ButtonNav } from "./ButtonNav";

export const BarNav = ({imagen, getImagenBreed}) => {

    return(
        <nav className="bar_nav">
            <ButtonNav
                nombre={"Listado de razas y sub razas"}
                getImagenBreed={getImagenBreed}
            />
            <ButtonImagenAleatoria
                nombre={"Imagen Aleatoria"}
                setImagen={imagen}
            />
        </nav>
    );
};

BarNav.propTypes = {
    imagen: PropTypes.func,
    getImagenBreed: PropTypes.func.isRequired,
};