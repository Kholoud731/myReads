import { createStore, applyMiddleware } from "redux"
import thunk, {ThunkMiddleware} from "redux-thunk"
import reducers from '../rducers'
import { AppActions } from "../actions/types";
import { composeWithDevTools } from '@redux-devtools/extension';


export type AppState = ReturnType<typeof reducers>
export const store = createStore<AppState, AppActions,{},{}>(
    reducers, 
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)))