import { useEffect } from 'react';
import { getPokemon } from './api';
import { get, getIn } from "immutable";
import { getPokemonsWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import PokemonsList from './components/PokemonsList';
import Searcher from './components/Searcher';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => getIn(state, ['data','pokemons'])).toJS();
  const loading = useSelector(state => getIn(state, ['ui','loading']));

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
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
      {loading ?
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col> :
        <PokemonsList pokemons={pokemons} />

      }
    </div>
  );
}


export default App;