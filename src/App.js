import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import PokemonsList from './components/PokemonsList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPokemons = async () => {

      const pokemonsRes = await getPokemon();

      dispatch(getPokemonsWithDetails(pokemonsRes));
    };
    fetchPokemons();
  }, []);


  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>

        <Searcher />
      </Col>
      <PokemonsList pokemons={pokemons} /></div>);
}


export default App;