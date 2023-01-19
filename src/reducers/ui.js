import { fromJS, setIn } from "immutable";
import { SET_LOADING } from "../actions/types"

const initialState = fromJS({
    pokemons: [],
    loading: false,
})

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return setIn(state, ['loading'], fromJS(action.payload));

        default:
            return state;
    }
}