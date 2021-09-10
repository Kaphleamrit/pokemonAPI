import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import ListCard from "./ListCard";
import PokemonProfile from "./PokemonProfile";

const fetchData = async (key) => {
  const limit = 20;
  const page = key.queryKey[1];
  const offset = page * limit;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  return res.json();
};

const List = () => {
  const [getId, setId] = useState(0);
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState("list");
  const { data, status } = useQuery(["pokemons", page], fetchData, {
    keepPreviousData: true,
  });
  return (
    <div>
      {activePage === "profile" ? (
        <PokemonProfile setActivePage={setActivePage} id= {getId} prevData = {data}/>
      ) : (
        <div>
          {" "}
          <h1 className = "text-info" style = {{ textAlign: 'center'}}>Pokemons</h1>
          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error while fetching data</p>}
          {status === "success" && (
            <div>
              {data.results.map((entry, index) => {
               return (
               <ListCard
                  key={index}
                  name={entry.name}
                  setActivePage={setActivePage}
                  setId = {setId}
                  id = {index}
                />
               );
                
})}
            
            <div style = {{textAlign: 'center', marginTop: '30px'}}>
           
              <Button className = "text-primary"
                variant="dark"
                onClick={() => setPage(old => old === 0?  old : old - 1)}
                disabled = {page === 0}
                >
                Prev
              </Button>    <span className = "text-secondary" style = {{padding: '20px'}}>{page}</span>
               <Button  className = "text-primary" variant="dark"
               onClick={() => setPage((old) => old ===39? old : old + 1)}
               disabled = {page === 40}
               >
                Next
              </Button>
            </div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default List;
