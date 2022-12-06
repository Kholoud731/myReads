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
    expect(component.find(".list-books-content").childAt(0).children().length).toEqual(0);

    
  });

  it("renders 3 shelf components oncw we have data passes as a props", () => {
    component.setProps({data: allBooksResponse})
    expect(component.find(".list-books").childAt(0).text()).toBe("<Header />");
    expect(component.find(".open-search").childAt(0).text()).toBe("Add a book");
    expect(component.find(".list-books-content").childAt(0).children().length).toEqual(3);
    
  })

});
