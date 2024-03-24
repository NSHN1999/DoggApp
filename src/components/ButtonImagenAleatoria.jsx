import PropTypes from "prop-types";

export const ButtonImagenAleatoria = ({nombre, setImagen}) => {

    return (
        <div className="button_nav">
            <a onClick={setImagen} className="dropbox">{nombre}</a>
        </div>
    )
}

ButtonImagenAleatoria.propTypes = {
    nombre: PropTypes.string,
    setImagen: PropTypes.func,
};

ButtonImagenAleatoria.defaultProps = {
    nombre: "Button",
};
