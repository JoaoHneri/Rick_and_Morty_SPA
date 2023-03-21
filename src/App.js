import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favs from "./components/Favs/Favs";
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" Component={Home}></Route>
    <Route exact path="/favs" Component={Favs}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
