import PokemonCard from "./PokemonCard";
import './PokemonsList.css'

const PokemonsList = ({ pokemons }) => {

    return (
        <div className="PokemonsList">
            {
                pokemons.map(value => {
                    return <PokemonCard name={value.name} key={value.name} image={value.sprites.front_default} abilities={value.abilities[0].ability.name}/>;
                })
            }
        </div>
    );
};

PokemonsList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokemonsList;