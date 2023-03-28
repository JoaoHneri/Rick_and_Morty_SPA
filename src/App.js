import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./Routes/Favorites";
import CardDetails from "./components/Cards/CardDetails";

function App() {


  return (
   <BrowserRouter>
   <Routes>
   <Route exact path="/:id" Component={CardDetails}></Route> 
    <Route exact path="/" Component={Home}></Route>
    <Route exact path="/favorites" Component={Favorites}></Route> 
    <Route exact path="/favorites/:id" Component={CardDetails}></Route> 
   </Routes>
   </BrowserRouter>
  );
}

export default App;
