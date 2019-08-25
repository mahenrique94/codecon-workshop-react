import { actionsTypes } from '../constants/tweets'

const INITIAL_STATE = {
    tweets: []
}

const reducers = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionsTypes.TWEETS_GET_ALL:
            return { ...state, tweets: payload }
        default:
            return state
    }
}

export { reducers }
