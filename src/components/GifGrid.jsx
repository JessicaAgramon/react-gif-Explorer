import { useEffect, useState } from 'react';

import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {

     const {images, isLoading} = useFetchGifs (category);  

  

     return (
          <>
               <h3>Se muestran los siguientes resultados para: '{category}'</h3>
               {
                    isLoading
                    ? (<h2>Cargando...</h2>)
                    : null
               }
               

               <div className='card-grid'>
                    {
                         images.map( ( image ) => (
                              <GifItem 
                                   key={image.id}
                                   {...image }
                                   // title={image.title}
                                   // url={image.url}
                                   />
                         ))
                    }
               </div>
          </>
     )
}

export default GifGrid