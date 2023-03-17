import React from 'react';
import styles from './Cards.module.css';

function Cards({results}) {
    let display;
    if(results){
        display = results.map(x =>{
            let {id, name, image, species, location, status} = x;
            return(
            <div key={id} className={'col-4 mb-4 position-relative'}>
            <div className={styles.cards}>
              <img src={image} alt='' className={`${styles.img} img-fluid`}/> 
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
