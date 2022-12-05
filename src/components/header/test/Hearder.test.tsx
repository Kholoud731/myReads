import { Provider } from "react-redux";
import { store } from "../../../store/rootStore";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("test Header component", ()=>{
    it("Has the main header MyReads as the title of the header", ()=>{
        renderWithContext(<Header/>)
        expect(screen.getByText("MyReads")).toBeInTheDocument()
    })
});

function renderWithContext (element: React.ReactElement){
    render(
        <Provider store={store}>
            <Router>
                {element}
            </Router>
        </Provider>
    )
}
