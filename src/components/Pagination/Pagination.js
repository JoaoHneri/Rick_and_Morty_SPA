import React from 'react'

const Pagination = ({Page, setPage}) => {
    let prev = () =>{
        if(Page === 1)return
        setPage((x) => x - 1)
    }

    let next = () =>{
        setPage((x) => x + 1)
    }

  return <div className='container d-flex justify-content-center gap-5 my-5'>
    <button type='button' onClick={prev} className='btn btn-outline-success'>Anterior</button>
    <button type='button' onClick={next} className='btn btn-outline-success'>Próximo</button>
  </div>
}

export default Pagination
