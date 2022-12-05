import ConnectedBookDetails from './components/bookDeatails/ConnectedBookDetails'
import { Provider } from "react-redux";
import { store } from "./store/rootStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/searchPage/SearchPage";
import ConnectedHome from "./components/homePage/ConnectedHome";


const App = () => {

    return     (      
    <Provider store={store}>
    <Router>
     <Routes>
         <Route path="/"  element={<ConnectedHome/>} />
         <Route path="/:i"  element={<p>nor found</p>} />   {/* remove to add page not found later*/}

         <Route path="/show/:id" element={<ConnectedBookDetails/>} />
         <Route path="/search" element={<SearchPage/>} />
     </Routes>
   </Router>
 </Provider>)
} 

export default App;
