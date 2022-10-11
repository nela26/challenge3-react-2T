import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPokemon = () => {
  const [character, setCharacter] = useState("");

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const datos = await resp.json();
      setCharacter(datos);
    };

    getAPI();
  }, [name]);

  
  return (
    <div className="principalSection">
      {character && (
        <>
        <div className="container-pokemon">
          <div className="container-card">
            <h3>{name}</h3>
            <div>
              <img
                className="img-pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`}
                alt={character.name}
              />
            </div>
          </div>

          <div className="container-description">
          
            <h4 className="text">Puntos de Salud: {character.stats[0].base_stat}</h4>
            <h4>Ataque: {character.stats[1].base_stat}</h4>
            <h4>Defensa: {character.stats[2].base_stat}</h4>
            <h4>Ataque Especial: {character.stats[3].base_stat}</h4>
            <h4>Defensa Especial: {character.stats[4].base_stat}</h4>
            <h4>Velocidad: {character.stats[5].base_stat}</h4>
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPokemon;
