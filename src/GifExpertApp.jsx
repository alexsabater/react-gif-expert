import { useState } from "react"
import { AddCategory,GifGrid } from "./components";

//No hace falta importar react
export const GifExpertApp = () => {

    //hook para manejar estados de actualización de la lista de gifs

    const [categories, setCategories] = useState(['One Punch'])//Inicializo con un array con valor inicial one punch
    console.log(categories);

    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories])
      // console.log('Valorant')
      // setCategories([...categories, 'Valorant'])
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input para la entrada de datos de usuario, le estoy mandando la propiedad de setCategories al componente cuando la pongo como en la línea de abajo*/}
        <AddCategory 
        //setCategories={ setCategories } La idea es pasarle como prop directamente el valor que voy a utilizar en vez de la funcion
          onNewCategory = {onAddCategory}// La palabra on, se refiere a que está emitiendo algo, por lo que se interpreta como evento
        />
        {/* listado de gif, voy a utilizar una order list (ol) que es una lista enumerada*/}
        {/* <button onClick={onAddCategory}>Agregar</button>*/
        // <ol>
            
            
        // </ol> 
      }
      {categories.map(category =>
                //return <li key={category}>{category}</li>
                (
                  <GifGrid  key ={category} category ={category}/>
                )
            )} 
        
            {/* gif item */}

    </> 
  )
}
