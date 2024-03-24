
export const GetImageBreeds = async(raza) => {

    raza = raza.replace(" ", "/");

    const url = `https://dog.ceo/api/breed/${raza.trim()}/images/random`;

    const resp = await fetch(url);
    const {message} = await resp.json();

    let imagen = message.toString();

    return imagen;
};
