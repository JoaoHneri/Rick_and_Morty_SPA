import React from 'react'
import Fav from '../components/Favs/Favs'
import Social from '../components/Social/Social'
import { Link } from 'react-router-dom'

function Favorites() {
  return (
    <div className="FavoritesContainer">
        <h1 className="text-center mb-4">Favorites</h1>
    
    <div className="container">
        <div className="row">
          <div className="col-3"><Link to="/">Home</Link></div>
          <div className="col-8">
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
