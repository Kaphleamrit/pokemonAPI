import React from "react";

const ListCard = ({ name, setActivePage, setId, id }) => {
  const url = `https://img.pokemondb.net/sprites/bank/normal/${name}.png`;
  return (
    <div
      onClick={() => {
        setActivePage("profile");
        setId(id);
      }}
      className="listCard border border-info rounded shadow-lg"
      style={{ cursor: "pointer" }}
    >
      <img src={url} alt={name} />
      <h3 style = {{color: 'white'}}>{name}</h3>
    </div>
  );
};

export default ListCard;
