import { shallow, ShallowWrapper } from "enzyme";
import { allBooksResponse } from "../../../rducers/test/reducers.test";
import SearchPage from '../SearchPage';

const initialState = {
  results: [],
  apiSearchForBook: expect.any(Function),
};
describe("Search Page test", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<SearchPage {...initialState} />);
  });

  it("renders initial values", () => {
    expect(component.find(".close-search").text()).toBe("Close");
    expect(component.find(".search-books-input-wrapper input").at(0).props().placeholder).toEqual("Search by title, author, or ISBN");
    expect(component.find(".grid").children().length).toEqual(0);
  });

  it("renders 3 books when we set values of the results to 3 books", () => {
    component.setProps({results: allBooksResponse})
    expect(component.find(".grid").children().length).toEqual(3);
  });


});
