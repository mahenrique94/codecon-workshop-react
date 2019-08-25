import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reducers } from './reducers'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reactotron } from './reactotron'

const middlewares = [
    createLogger()
]
const enhancers = [
    reactotron.createEnhancer()
]

const store = createStore(
    combineReducers(reducers),
    compose(composeWithDevTools(applyMiddleware(...middlewares), ...enhancers))
)

export { store }
