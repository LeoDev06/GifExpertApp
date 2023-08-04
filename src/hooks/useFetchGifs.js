import { useEffect, useState} from "react";
import { GetGif } from "../aid-js/GetGif";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  /*-------------------------------------------------
  - El useEffect no puede ser una funcion asincrona -
  --------------------------------------------------*/
  const GetImages = async() => {                  
    const gift = await GetGif(category);          
    setImages(gift);
    setIsLoading(false);                              
  }                                               
                                                    
  useEffect(() =>{                                
    GetImages();                                  
  },[]) 

  return{
    images: images,
    isLoading: isLoading
  }
}
