import React from 'react'
import Fav from '../components/Favs/Favs'
import Navbar from '../components/Navbar/Navbar'
import Social from '../components/Social/Social'

function Favorites() {
  return (
    <div className="FavoritesContainer">
      <Navbar/>
        <h1 className="text-center mb-4">Favoritos</h1>
    
    <div className="container">
        <div className="row">
        <div className="col-lg-3 col-12 mb-5"><Social/></div>
          <div className="col-lg-8 col-12">
            <div className="row">
            <Fav/>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Favorites
