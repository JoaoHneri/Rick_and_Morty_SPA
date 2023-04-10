import React from 'react'
import Home from '../components/pages/Home'
import Favorites from '../components/pages/Favorites'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardDetails from "../components/Cards/CardDetails";

const Rotas = () => {
  return (
    <BrowserRouter>
   <Routes>
   <Route exact path="/:id" Component={CardDetails}></Route> 
    <Route exact path="/" Component={Home}></Route>
    <Route exact path="/favorites" Component={Favorites}></Route> 
    <Route exact path="/favorites/:id" Component={CardDetails}></Route> 
   </Routes>
   </BrowserRouter>
  )
}

export default Rotas
