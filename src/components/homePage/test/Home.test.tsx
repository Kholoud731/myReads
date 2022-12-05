import { shallow, ShallowWrapper } from "enzyme";
import { allBooksResponse } from "../../../rducers/test/reducers.test";
import Home from "../Home";

const initialState = {
  data: [],
  apiRequestAll: expect.any(Function),
};
describe("Book Details test", () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    component = shallow(<Home {...initialState} />);
  });

  it("renders initial values", () => {
    expect(component.find(".list-books").childAt(0).text()).toBe("<Header />");
    expect(component.find(".open-search").childAt(0).text()).toBe("Add a book");
    expect(component.find(".list-books-content").childAt(0).children().length).toEqual(3);

    expect(component.find(".list-books-content").childAt(0).childAt(0).props()).toEqual({title:"Currently Reading", books: []});
    expect(component.find(".list-books-content").childAt(0).childAt(1).props()).toEqual({title:"Read", books:[]});
    expect(component.find(".list-books-content").childAt(0).childAt(2).props()).toEqual({title:"Want to Read", books:[]});

    
  });

});
