import { IGif } from "./gif";
import { ADD_GIFS, GIF_DETAILS } from "./actions";

export interface IAppState {
    gifs: IGif[];
    gif: IGif;
}
export const INITIAL_STATE: IAppState = {
    gifs: [],
    gif: {
        id: "",
        embed_url: "",
        is_sticky: 0,
        rating: "",
        source_tld: "",
        title: "",
        type: "",
        images: {
            original: {
                url: ""
            }
        }
    }
};

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_GIFS:
            return Object.assign({}, state, {
                ...state,
                gifs: action.gifs
            });
        case GIF_DETAILS: {
            return Object.assign({}, state, {
                ...state,
                gif: action.gif
            });
        }
    }
    return state;
}
