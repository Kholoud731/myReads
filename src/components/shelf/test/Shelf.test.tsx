import { shallow, ShallowWrapper } from "enzyme";
import { allBooksResponse } from "../../../rducers/test/reducers.test";
import Shelf from '../Shelf';

const initialState = {
    title: "kholoud",
    books: []
};
describe("Search Page test", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Shelf {...initialState} />);
  });

  it("renders initial values", () => {
    expect(component.find(".title").text()).toBe("kholoud");
    expect(component.find(".grid").children().length).toEqual(0);
  });

  it("renders the new values when we set the props", () => {
    component.setProps({title: "kholoud2", books: allBooksResponse})
    expect(component.find(".title").text()).toBe("kholoud2");
    expect(component.find(".grid").children().length).toEqual(3);
  });

});
