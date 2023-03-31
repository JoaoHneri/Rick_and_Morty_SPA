import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "../components/Cards/Cards";
import Social from "../components/Social/Social";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
import Navbar from "../components/Navbar/Navbar";



function App() {

  let [Page, setPage] = useState(1);
  let [fetchData,setFetchData] = useState([]);
  let [Person, setPerson] = useState("");
  let {info, results} = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${Page}&name=${Person}`;
  
  useEffect(()=>{
      (async function(){
        let data = await fetch(api).then((res) =>res.json());
        setFetchData(data);
        console.log(data);
      })()
  },[api]);


  return (
    <div className="App">
      <Navbar/>
      <Search setPage={setPage} setPerson={setPerson}/>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-5"><Social/></div>
          <div className="col-lg-8 col-12">
            <div className="row">
            <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} Page={Page} setPage={setPage}/>
    </div>
  );
}

export default App