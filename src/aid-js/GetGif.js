export const GetGif = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=TONZ9tmTbC5p5LgMuK80XAfsFiDncKVK&q=${category}`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  

  const gifs = data.map((image) =>{
    return(
      {
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
      }
    )
  });

  return gifs;
}