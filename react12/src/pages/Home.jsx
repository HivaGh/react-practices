import { useState, useEffect } from "react";

const CHARACTERS_LIST_API = "https://rickandmortyapi.com/api/character";

export const Home = () => {

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch(CHARACTERS_LIST_API)
      .then(data => data.json())
      .then(data => setCharacterList(data.results));
  }, []);

  return (
    <div>
      {characterList?.map(({ id, name, image, status }) => (
        <div key={id}>
          <img src={image} />
          <h3> Name: {name} </h3>
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};
