import {React} from "react";
import { Button , Alert} from "react-bootstrap";
import { useQuery } from "react-query";

const fetchData = async (key) => {
  const name = key.queryKey[1];
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
};



function PokemonProfile({ setActivePage, id, prevData }) {
  const name = prevData.results[id].name;
  const { data, status } = useQuery(["pokemons", name], fetchData, {
    keepPreviousData: true,
  });

  return (
    <div className = "pokemonProfile">
    {status === "loading" && <p style = {{color: 'white'}}>Loading...</p>}
      {status === "error" && <p style = {{color: 'white'}}>Error while fetching data</p>}
      {status === "success" &&  
      <Alert show={true} variant="dark" >
        <Alert.Heading>{data.name}</Alert.Heading>
        <div className="pokemonInfo text-primary ">
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <span>Abilities: </span>
            <ul>
              {data.abilities.map((obj, index) => {
                return <li key={index}>{obj.ability.name}</li>;
              })}
            </ul>

            <span>Helds Items: </span>
            <ul>
              {data.held_items.map((obj, index) => {
                return <li key={index}>{obj.item.name}</li>;
              })}
            </ul>
          </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setActivePage("list")} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

  }
    </div>
  );
}

export default PokemonProfile;
