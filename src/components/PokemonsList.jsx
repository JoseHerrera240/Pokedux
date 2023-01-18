import PokemonCard from "./PokemonCard";
import './PokemonsList.css'

const PokemonsList = ({ pokemons }) => {
    console.log('pokemons ', pokemons)
    // {
    //     "name": "bulbasaur",
    //     "url": "https://pokeapi.co/api/v2/pokemon/1/"
    //   }
    return (
        <div className="PokemonsList">
            {
                pokemons.map(value => {
                    return <PokemonCard name={value.name} key={value.name} />;
                })
            }
        </div>
    );
};

PokemonsList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonsList;