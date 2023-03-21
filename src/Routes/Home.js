import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "../components/Cards/Cards";
import Social from "../components/Social/Social";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import { Link } from "react-router-dom";

function Home() {

  let [Page, setPage] = useState(1);
  let [fetchData,setFetchData] = useState([]);
  let [Person, setPerson] = useState("");
  let {info, results} = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${Page}&name=${Person}`;
  
  useEffect(()=>{
      (async function(){
        let data = await fetch(api).then((res) =>res.json());
        setFetchData(data);
      })()
  },[api]);


  return (
    <switch>
    <div className="App">
      <h1 className="text-center mb-4">Rick and Morty</h1>
      <Link to="/favs">Favs</Link>
      <Search setPage={setPage} setPerson={setPerson}/>
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
      <Pagination info={info} Page={Page} setPage={setPage}/>
    </div>
    </switch>
  );
}

export default Home