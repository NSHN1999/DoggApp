
export const GetImageRandom = async() => {

    const url = `https://dog.ceo/api/breeds/image/random`;
    const resp = await fetch(url);
    const {message} = await resp.json();

    return message;
};
