import { fromJS,setIn, getIn } from "immutable";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
    loading: false,
})

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            // return state.setIn(['pokemons'], fromJS(action.payload));
            return setIn(state, ['pokemons'], fromJS(action.payload))
        case SET_FAVORITE:
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId
            });
            if (currentPokemonIndex < 0) {
                return state;
            }
            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');


            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

        case SET_LOADING:

        return setIn(state, ['loading'], fromJS(action.payload));
            // return { ...state, loading: action.payload };
        
        
        default:
            return state;
    }
}