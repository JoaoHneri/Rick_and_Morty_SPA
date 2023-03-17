import React from 'react'
import styles from './Search.module.css'

const Search = () => {
  return <form className='d-flex justify-content-center gap-4 my-5'>
    <input className={styles.input} type='text' placeholder='Pesquise seu Porsonagem favorito :)' />
    <button className='btn btn-success fs-5'>Buscar</button>
  </form>
}

export default Search
