//Un hook al fin y al cabo es una función.
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);//Inicializo un array vacío. Cda vez que se lance el setImages se cambia de estado y se redibuja el componente.
    //El useEffect es un hook que permite establecer efectos secundarios en componentes, se utiliza para gestionar ciclos de vida y realizar tareas asíncronas dentro de componentes funcionales
    //Si dejamos las dependencias vacías solo se ejecutará la función la vez que se dibuja el componente. En las dependecias debemos poner las condiciones para que se ejecute la función.
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async() => {
    const newImages =  await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return{
        images,
        isLoading 

  }
}
