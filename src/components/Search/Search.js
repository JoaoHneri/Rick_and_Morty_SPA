import React from 'react'
import styles from './Search.module.css'

const Search = ({setPerson, setPage}) => {
  return <form className='d-flex justify-content-center gap-4 my-5'>
    <input className={styles.input} type='text' onChange={(e)=> {setPage(1); setPerson(e.target.value)}} placeholder='Pesquise seu Porsonagem favorito :)' />
    <button onClick={e =>{e.preventDefault()}} className='btn btn-success fs-5'>Buscar</button>
  </form>
}

export default Search
