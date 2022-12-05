import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { allBooksResponse } from "../../../rducers/test/reducers.test";
import Book from "../Book";

describe("test Book component", ()=>{
    const initialState ={
        imageLinks: {
            smallThumbnail: allBooksResponse[0].imageLinks.smallThumbnail,
            thumbnail: allBooksResponse[0].imageLinks.thumbnail 
          },
          title: "title 1",
          authors: ["kholoud"],
          id: "id1",
          shelf: "read",
          book: allBooksResponse[0],
          apiUpdateOne: expect.any(Function)

    }

    let component : ShallowWrapper;

    beforeEach(()=>{
        component = shallow(<Book {...initialState}/>)
    })

    it("initial values to be the same as the one passed as initial props", ()=>{
        expect( component.find(".bookTitle").text()).toEqual("title 1")
        expect( component.find(".bookAuthors").text()).toEqual("kholoud")
        expect( component.find(".bookCover").prop('style')).toHaveProperty('backgroundImage', `url(${allBooksResponse[0].imageLinks.thumbnail})`)
        expect(component.find("BookShelfChanger").props()).toHaveProperty('shelf', 'read')
    })

    it("have the props changes when we set new values", ()=>{
        component.setProps({title: 'title2', authors: ["kholoud1"], shelf: "none", imageLinks: {thumbnail: allBooksResponse[1].imageLinks.thumbnail}})
        expect( component.find(".bookTitle").text()).toEqual("title2")
        expect( component.find(".bookAuthors").text()).toEqual("kholoud1")
        expect( component.find(".bookCover").prop('style')).toHaveProperty('backgroundImage', `url(${allBooksResponse[1].imageLinks.thumbnail})`)
        expect(component.find("BookShelfChanger").props()).toHaveProperty('shelf', 'none')
    })
})