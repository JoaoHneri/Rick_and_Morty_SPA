import React from 'react';
import styles from './Cards.module.css';
import { useState } from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { getFavorites, setFavorites } from '../../services/LocalStorageFuncs';
import { Link } from 'react-router-dom';

function Cards({results, page}) {

  let [Favs, setFavs] = useState( getFavorites('barraFavs') || []);

   const handleClick = (obj)=>{
    const element = Favs.find(x => x.id === obj.id);
    if(element){
      const arrFilter = Favs.filter((x) => x.id !== obj.id)
      setFavs(arrFilter);
      setFavorites('barraFavs',arrFilter);
    }else{
      setFavs([...Favs,obj]);
      setFavorites('barraFavs',[...Favs, obj]);
    }
   }

    let display;
    if(results){
        display = results.map(x =>{
            let {id, name, image, species, location, status} = x;
            return(
            <div
            style={{textDecoration: "none"}}
            key={id} className={'col-4 mb-4 position-relative text-dark'}>
            <div className={styles.cards}>
            <Link to={`${page}${id}`}>
              <img src={image} alt='' className={`${styles.img} img-fluid`}/>
            </Link> 
              <div className={`${styles.cardy_body} Card-body`}>
                <div className='fs-4 fw-bold'>{name}</div>
                <div className='fs-5 mb-4'>{species}</div>
                <div className='mb-4'>                    
                    <div className='fs-6'>Última localização:</div>
                    <div className='fs-5'>{location.name}</div> 
                    {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}  
                </div>
                <div>
                <p className={`${styles.heart}`} onClick={() => handleClick(x)}>
            {
              Favs.some((itemFav)=> itemFav.id === x.id) ? (
                <AiFillHeart/>
              ) : (
                <AiOutlineHeart />
              )
            }
            </p>  
                </div>
              </div>
            </div> 
            </div>
            )
        })
    }else{
        display =  "Não encontrado";
    }

  return <>{display}</>
}

export default Cards
