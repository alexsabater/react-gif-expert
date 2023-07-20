import {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {
  
    //Manejador de estados
    const [inputValue, setInputValue] = useState('');    
    //Función de cambio dentro de la caja de texto
    const onInputChange = ({target}) => { // Se puede desectructurar {target} del evetno para no utilizar la palabra event dentro, sin parámetros sería event.target.value
        console.log(target.value);
        setInputValue(target.value);//Utilizamos este evento para que se escriba en la caja lo que escribe el usuario por teclado
    }
        //Función para cuando se presione enter
    const onSubmit = (event) => { //Este evento se ejecuta cuando se presiona enter
        event.preventDefault();//Para evitar una recarga del navegador web cuando se ejecuta el submit
        console.log(inputValue);

        const newInputValue = inputValue.trim();
        if(newInputValue.length < 1) return;
        onNewCategory(newInputValue);
        setInputValue ('');

        //Otra forma de hacerlo
        //Para evitar q me cuando presione enter sin texto se añada un espacio en blanco:
        // console.log('TRIM ' + inputValue.trim().length);
        // console.log('TRIM ' + inputValue.length);
        // if(inputValue.trim().length < 1) return;//El trim lo utilizamos para quitar los espacio delante y detras del texto, pero se quedan los del medio
        // setCategories((categories) => [inputValue, ...categories]);
        // setInputValue ('');// Cuando se añada un nuevo elemento dejamos la caja en blanco
    }
    //Componente
    return ( //Lo que metemos dentro del form es lo que se regresa LINEA DE ABAJO: <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>    
        <input
            type="text"
            placeholder="Buscar gifs"
            value= {inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
  };





