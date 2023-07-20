import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    

    const {images, isLoading} = useFetchGifs(category); // hook personalizado

    console.log({isLoading});
    
    //El null no se renderiza en react, para mostrar un elemento html cuando me convenga debemos
    return (
        <>
            <h3>{category}</h3> 
            {isLoading? <h2>Cargando...</h2>:null}

            <div className= "card-grid">
            {images.map((image) => (
                    // <GifItem key= {id} title={title} url={url}/>
                    <GifItem key= {image.id} 
                    {...image}/> //Estoy mandando todas las propiedas que vienen en image
                
            ))}
                

            </div>
            {/* <ol>
            {images.map(({id,title}) => (
                    <li key={id}>{title}</li>
                
            ))}
            </ol> */}
            
            
        </>
    )
}
