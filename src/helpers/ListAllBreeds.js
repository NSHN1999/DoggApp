
export const ListAllBreeds = (razas, subRazas) => {

    let cadenaRazas = "";

    for(let i = 0 ; i < razas.length ; i++){

        if(subRazas[i].length < 1) { //SE VALIDA QUE LA RAZA TENGA SUBRAZA(S)
            cadenaRazas += "," + razas[i];
        }else{//SI TIENE SUB RAZAS SE LE ASIGNA SU NOMBRE COMPLETO
            const nombreCompletoRaza = subRazas[i].map(name => razas[i] + " " + name);
            cadenaRazas += "," + nombreCompletoRaza;
        }
    }

    const allRazas = cadenaRazas.split(",");//TRANSFORMA LA CADENA A UNA ARREGLO
    allRazas.shift();//SE ELIMINA EL PRIMER VALOR DEL ARREGLO YA QUE ESTE ESTA VACIO

    return allRazas;
}
