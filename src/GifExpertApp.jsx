import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Molang']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
 
    //Muestra la categoria que se busca y no deja las anteriores búsquedas
    setCategories([newCategory]);
    // Hace una copia de todas las categorias que hay y agrega la nueva 
    // setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GIF Explorer</h1>

      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) => (
          <GifGrid key={category}
            category={category} />
        ))
      }

    </>
  )
}
