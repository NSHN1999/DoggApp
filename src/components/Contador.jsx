import { useEffect, useState } from "react";
import { getBreeds } from "../helpers/GetBreeds";

export const Contador = () => {

    const [ contador, setContador ] = useState(0);

    const onContador = async() => {
        const razas = await getBreeds();
        const cantidadRazas = razas.length;
        setContador(cantidadRazas);
    };

    useEffect(() =>{
        onContador();
    }, []);

    return(
        <div className="contador">
            <h1>Total razas</h1>
            <h1 className="numero_cuenta">{contador}</h1>
        </div>
    );
};
