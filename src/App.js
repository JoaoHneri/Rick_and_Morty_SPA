import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./Routes/Favorites";

function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" Component={Home}></Route>
    <Route exact path="/favorites" Component={Favorites}></Route> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
