import {legacy_createStore as createStore} from 'redux'
import { AuthReducer } from './AuthReducer'

export const store = createStore(AuthReducer)