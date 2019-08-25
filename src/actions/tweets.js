import { actionsTypes } from '../constants/tweets'

const getAll = payload => ({
    payload,
    type: actionsTypes.TWEETS_GET_ALL
})

export { getAll }
