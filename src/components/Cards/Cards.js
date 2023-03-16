import React from 'react'


function Cards({results}) {
    let display;
    if(results){
        display = results.map(x =>{
            let {id, name, image, species, location, status} = x;
            return(
            <div key={id} className='col-4 position-relative'>
            <div className=''>
              <img src={image} alt='' className='img-fluid'/> 
              <div className='cardy-body'>
                <div className='fs-4 fw-bold mb-4'>{name}</div>
                <div className='mb-5'>
                    <div className='fs-6'>Última localização:</div>
                    <div className='fs-5'>{location.name}</div>
                    <div className='position-absolute badge bg-danger mb-5'>{status}</div>
                </div>
              </div>
            </div> 
            </div>)
        })
    }else{
        display =  "Não encontrado";
    }

  return <>{display}</>
}

export default Cards
