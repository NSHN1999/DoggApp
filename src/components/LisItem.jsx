import PropTypes  from "prop-types";
import { GetImageBreeds } from "../helpers/GetImageBreeds";

export const LisItem = ({nombreRaza , getImagenBreed}) => {

    const getImagen = async() => {
        const newImagen = await GetImageBreeds(nombreRaza);
        getImagenBreed(newImagen);
    }

    return (
        <>
            <li>
                <a onClick={getImagen} className="ancla_raza">{nombreRaza}</a>
            </li>
        </>
    );
};

LisItem.propTypes = {
    nombreRaza: PropTypes.string.isRequired,
    getImagenBreed: PropTypes.func.isRequired,
};

LisItem.defaultProps = {
    nombreRaza: "No encontrada",
};