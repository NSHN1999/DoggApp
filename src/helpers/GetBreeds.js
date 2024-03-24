import { ListAllBreeds } from "./ListAllBreeds";

export const getBreeds = async() => {

    const url = `https://dog.ceo/api/breeds/list/all`;
    const resp = await fetch(url);
    const {message} = await resp.json();
    
    /**
     * SE OBTIENEN TODAS LAS RAZAS EN UN ARREGLO, TAMBIEN LAS SUB RAZAS CON LE MISMO LARGO DEL PRIMER
     * ARREGLO, DE ESTA FORMA TRABAJARLOS EN PARALELO
    */
    const razas = Object.keys(message);
    const subRazas = Object.values(message);

    const allRazas = ListAllBreeds(razas, subRazas);

    return allRazas;
};
