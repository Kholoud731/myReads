import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import SearchPage from "../SearchPage";
import { createStore, applyMiddleware } from "redux";
import { AppState } from "../../../store/rootStore";
import { AppActions } from "../../../actions/types";
import RootReducer from "../../../rducers";
import { render, screen } from "@testing-library/react";
import {allBooksResponse}  from '../../../rducers/test/reducers.test'
import { recivedBookSearchResults } from "../../../actions";
import { BrowserRouter as Router } from "react-router-dom";
import thunk, {ThunkMiddleware} from "redux-thunk"

const store = createStore<AppState, AppActions, {}, {}>(RootReducer,applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));

describe("first", () => {
    renderer.create(
    <Provider store={store}>
         <Router>
      <SearchPage />
      </Router>
    </Provider>);
  it("first render", () => {});
store.dispatch(recivedBookSearchResults(allBooksResponse));
// expect(screen.getAllByLabelText('book')).toHaveLength(3);
});
