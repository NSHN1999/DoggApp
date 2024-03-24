import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import { getBreeds } from "../helpers/GetBreeds";
import { LisItem } from "./LisItem";

export const ListRazas = ({getImagenBreed}) => {

    const[ listadoRazas, setListadoRazas ] = useState([]);

    const addRazas = async() => {
        const razas = await getBreeds();
        setListadoRazas(razas);
    }

    useEffect(() => {
        addRazas();
    }, []); 

    return(
        <ol className="lista_razas">
            {
                listadoRazas.map(raza => 
                    <LisItem 
                        key={raza}
                        nombreRaza={raza}
                        getImagenBreed={getImagenBreed}
                    />
                )
            }
        </ol>
    );
};

ListRazas.propTypes = {
    getImagenBreed: PropTypes.func.isRequired,
}