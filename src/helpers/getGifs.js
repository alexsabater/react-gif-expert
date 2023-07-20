
//Aquí debemos crear una petición http de conexión a la API
export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dCAetzBfJeU1TMk5rrI9EQxgxDqA6s8L&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();// La data es un array siempre

    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    console.log(gifs);
    return gifs;


}