import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

export default configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState)