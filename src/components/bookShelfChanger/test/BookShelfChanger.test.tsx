import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import BookShelfChanger from "../BookShelfChanger";

const initialState = {
  shelf: 'read',
  onChangeSelectHandeler: expect.any(Function),
};
describe("Book Details test", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<BookShelfChanger {...initialState} />);
  });

  it("renders initial values", () => {
    expect(component.find("select").props().value).toEqual("read");
  });

  it("renders the new props when the new values are set", () => {
    component.setProps({shelf: "notYetSelected"})
    expect(component.find("select").props().value).toEqual("notYetSelected");

  });
});
