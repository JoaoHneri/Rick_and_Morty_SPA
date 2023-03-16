import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Social from "./components/Social/Social";
import { useEffect, useState } from "react";

function App() {

  let [page, setPage] = useState(1);
  let [fetchData,setFetchData] = useState([]);
  let {info, results} = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?${page}`;
  
  useEffect(()=>{
      (async function(){
        let data = await fetch(api).then((res) =>res.json());
        setFetchData(data);
      })()
  },[api]);


  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick and Morty <span className="text-success">Wiki</span></h1>

      <div className="container">
        <div className="row">
          <div className="col-3"><Social/></div>
          <div className="col-8">
            <div className="row">
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
