import Home from "./components/homePage/Home";
import BookDeatils from './components/bookDeatails/BookDetails'
import { Provider } from "react-redux";
import { store } from "./store/rootStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";


const App = () => {

    return     (      
    <Provider store={store}>
    <Router>
     <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/:i"  element={<p>nor found</p>} />   {/* remove to add page not found later*/}

         <Route path="/show/:id" element={<BookDeatils/>} />
         <Route path="/search" element={<SearchPage/>} />
     </Routes>
   </Router>
 </Provider>)
} 

export default App;
