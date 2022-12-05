import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { allBooksResponse } from "../../../rducers/test/reducers.test";
import BookDetails from "../BookDetails";

const initialState = {
  book: allBooksResponse[0],
  apiRequestOne: expect.any(Function),
};
describe("Book Details test", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<BookDetails {...initialState} />);
  });

  it("renders initial values", () => {
    expect(component.find("h1").text()).toEqual(allBooksResponse[0].title);
    expect(component.find("p").text()).toEqual(allBooksResponse[0].description);
    expect(component.find("div").childAt(1).props()).toEqual({
      title: allBooksResponse[0].title,
      authors: allBooksResponse[0].authors,
      id: allBooksResponse[0].id,
      shelf: allBooksResponse[0].shelf,
      book: allBooksResponse[0],
      imageLinks: allBooksResponse[0].imageLinks,
    });
  });

  it("renders the new props when the new values are set", () => {
    component.setProps({book: allBooksResponse[1]})
    expect(component.find("h1").text()).toEqual(allBooksResponse[1].title);
    expect(component.find("p").text()).toEqual(allBooksResponse[1].description);
    expect(component.find("div").childAt(1).props()).toEqual({
      title: allBooksResponse[1].title,
      authors: allBooksResponse[1].authors,
      id: allBooksResponse[1].id,
      shelf: allBooksResponse[1].shelf,
      book: allBooksResponse[1],
      imageLinks: allBooksResponse[1].imageLinks,
    });
  });
});
