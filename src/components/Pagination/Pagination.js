import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css'


const Pagination = ({Page, setPage, info}) => {
  return <ReactPaginate 
  className={`${styles.pag} pagination justify-content-center gap-4 my-4`}
  nextLabel="Próximo"
  previousLabel="Anterior"
  nextClassName='btn btn-success'
  previousClassName='btn btn-success'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  onPageChange={(data)=>setPage(data.selected +1)}
  activeClassName='active bg-success'
  onClick={()=>{window.scrollTo(0, 0)}}
  pageCount={info?.pages}/>
}

export default Pagination
