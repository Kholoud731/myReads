import {
  errorReceived,
  requestAction,
  getAllBooks,
  getOneBook,
  reciveUpdatedBooks,
  recivedBookSearchResults,
} from "../../actions";
import dataReducer from "../dataReducer";
import { BookDataType } from "../../actions/types";

export const initialState = {
  loading: false,
  allBooks: [],
  error: "",
  selectedBook: null,
  searchReuslts: [],
};

export const allBooksResponse: BookDataType[] = [
  {
    title: "Learning Web Development with React and Bootstrap",
    authors: ["Harmeet Singh", "Mehul Bhatt"],
    allowAnonLogging: false,
    canonicalVolumeLink:
      "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
    contentVersion: "preview-1.0.0",
    description:
      "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
    id: "sJf1vQAACAAJ",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    industryIdentifiers: [
      { type: "ISBN_10", identifier: "1786462494" },
      { type: "ISBN_13", identifier: "9781786462497" },
    ],
    infoLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
    language: "en",
    maturityRating: "NOT_MATURE",
    pageCount: 278,
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    previewLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
    printType: "BOOK",
    publishedDate: "2016-12-30",
    readingModes: { text: false, image: false },
    shelf: "currentlyReading",
  },
  {
    title: "Learning Web Development with React and Bootstrap",
    authors: ["Harmeet Singh", "Mehul Bhatt"],
    allowAnonLogging: false,
    canonicalVolumeLink:
      "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
    contentVersion: "preview-1.0.0",
    description:
      "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
    id: "2",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    industryIdentifiers: [
      { type: "ISBN_10", identifier: "1786462494" },
      { type: "ISBN_13", identifier: "9781786462497" },
    ],
    infoLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
    language: "en",
    maturityRating: "NOT_MATURE",
    pageCount: 278,
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    previewLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
    printType: "BOOK",
    publishedDate: "2016-12-30",
    readingModes: { text: false, image: false },
    shelf: "read",
  },
  {
    title: "Learning Web Development with React and Bootstrap",
    authors: ["Harmeet Singh", "Mehul Bhatt"],
    allowAnonLogging: false,
    canonicalVolumeLink:
      "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
    contentVersion: "preview-1.0.0",
    description:
      "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
    id: "sJf1vQAACAAJ",
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:
        "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
    industryIdentifiers: [
      { type: "ISBN_10", identifier: "1786462494" },
      { type: "ISBN_13", identifier: "9781786462497" },
    ],
    infoLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
    language: "en",
    maturityRating: "NOT_MATURE",
    pageCount: 278,
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    previewLink:
      "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
    printType: "BOOK",
    publishedDate: "2016-12-30",
    readingModes: { text: false, image: false },
    shelf: "wantToRead",
  },
];

describe("Data reducer", () => {
  it("having loading equals true when we dispatch the request api action", () => {
    const state = dataReducer(initialState, requestAction());
    expect(state.loading).toBeTruthy();
  });

  it('having error equals "error received" when we dispatch the errorReceived action', () => {
    const errorMsg = "Error received";
    const state = dataReducer(initialState, errorReceived(errorMsg));
    expect(state.error).toEqual(errorMsg);
    expect(state.loading).toBeFalsy();
  });

  it("having array of response when we dispatch the getAllBooks action", () => {
    const state = dataReducer(initialState, getAllBooks(allBooksResponse));
    expect(state.allBooks).toEqual(allBooksResponse);
    expect(state.error).toEqual("");
    expect(state.loading).toBeFalsy();
  });

  it("have one response when we dispatch the getOneBook action", () => {
    const state = dataReducer(initialState, getOneBook(allBooksResponse[0]));
    expect(state.selectedBook).toEqual(allBooksResponse[0]);
    expect(state.error).toEqual("");
    expect(state.loading).toBeFalsy();
  });

  it("update the current shelf with the correct one passed to the action when we dispatch the reciveUpdatedBooks action", () => {
    const state = dataReducer(
      initialState,
      reciveUpdatedBooks(allBooksResponse[0].id, "read", allBooksResponse[0])
    );
    expect(state.allBooks[0].shelf).toEqual("read");
    expect(state.error).toEqual("");
    expect(state.loading).toBeFalsy();
  });

  it("update the search results with the correct array passed to the action when we dispatch the getOneBook action", () => {
    const state = dataReducer(
      initialState,
      recivedBookSearchResults(allBooksResponse)
    );
    expect(state.searchReuslts).toEqual(allBooksResponse);
    expect(state.error).toEqual("");
    expect(state.loading).toBeFalsy();
  });

  it("update the search results with the correct shelf passed to the action when we dispatch the reciveUpdatedBooks action", () => {
    const state = dataReducer(
      initialState,
      recivedBookSearchResults(allBooksResponse)
    );
    const newState = dataReducer(
      state,
      reciveUpdatedBooks(allBooksResponse[0].id, "read", allBooksResponse[0])
    );
    expect(newState.searchReuslts[0].shelf).toEqual("read");
    expect(newState.error).toEqual("");
    expect(newState.loading).toBeFalsy();
  });
});
