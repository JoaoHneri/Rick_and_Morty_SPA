import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Social from "./components/Social/Social";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";

function App() {

  let [Page, setPage] = useState(1);
  let [fetchData,setFetchData] = useState([]);
  let {info, results} = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${Page}`;
  
  useEffect(()=>{
      (async function(){
        let data = await fetch(api).then((res) =>res.json());
        setFetchData(data);
      })()
  },[api]);


  return (
    <div className="App">
      <h1 className="text-center mb-4">Rick and Morty <span className="text-success">Wiki</span></h1>

      <div className="container">
        <div className="row">
          <div className="col-3"><Social/></div>
          <div className="col-8">
            <div className="row">
            <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination setPage={setPage}/>
    </div>

  );
}

export default App;
