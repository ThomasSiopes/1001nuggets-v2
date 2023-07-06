import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
// import ErrorPage from "./components/ErrorPage";
const NavBar = React.lazy(() => import("./components/NavBar"));

//Pages
const Main = React.lazy(() => import("./pages/main"));
// const Author = React.lazy(() => import ("./pages/Author"));
// const Topic = React.lazy(() => import ("./pages/Topic"));
// const Quote = React.lazy(() => import ("./pages/Quote"));
// const TopicNav = React.lazy(() => import ("./pages/TopicNav"));
// const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
// const Collection = React.lazy(() => import ("./pages/Collection"));
// const SomePeople = React.lazy(() => import ("./pages/SomePeople"));
// const SearchResult = React.lazy(() => import ("./pages/SearchResult"));


function App () {
  return (
    <Router>
      <React.Suspense fallback="Loading navbar..."><NavBar/></React.Suspense>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
    </Router>
  )
}

export default App;
