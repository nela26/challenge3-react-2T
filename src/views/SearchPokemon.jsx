import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiContext } from '../context/apiProvider' ;


const SearchPokemon = () => {
    const { data } = useContext(apiContext);
 
  
const navigate = useNavigate()
      

    const goPokemon= (name) => {
        navigate(`/pokemon/${name}`);
    }

    function organize(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }

    return (
        <>
        <div className='search'>
            <h2>Selecciona un Pokemón</h2>
            <p className='arrow'>⬇️</p> 

            <select className='selector' onChange={event => goPokemon(event.target.value)}>
                <option value="">POKEMÓN</option>
                {data.results.sort(organize).map((poke) => (
                    <option key={poke.name} value={poke.name}> {poke.name}</option>
                ))}
            </select>
            </div>
        </>
    )
}

export default SearchPokemon;
