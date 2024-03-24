import { useState } from "react";
import PropTypes from "prop-types";
import { ListRazas } from "./ListRazas";

export const ButtonNav = ({nombre, getImagenBreed}) => {

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="button_nav">
            <a onClick={() => setIsOpen((mostrar) =>!mostrar)} className="dropbox">{nombre}</a>
            {isOpen && (
                <ListRazas
                    getImagenBreed={getImagenBreed}
                />
            )}
        </div>
    );
};

ButtonNav.propTypes = {
    nombre: PropTypes.string,
    getImagenBreed: PropTypes.func.isRequired,
};

ButtonNav.defaultProps = {
    nombre: "Button",
};