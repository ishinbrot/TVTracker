import { createStore } from 'redux'
import ShowListReducer from './reducers/ShowListReducer'

const store = createStore(ShowListReducer)

export default store