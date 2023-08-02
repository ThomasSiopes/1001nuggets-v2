import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//Styles
import "./assets/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
// import ErrorPage from "./components/ErrorPage";
const NavBar = React.lazy(() => import("./components/NavBar"));

//Pages
const Home = React.lazy(() => import("./pages/Home"))
const Author = React.lazy(() => import("./pages/Author"));
const Topic = React.lazy(() => import("./pages/Topic"));
const Quote = React.lazy(() => import("./pages/Quote"));
const TopicNav = React.lazy(() => import("./pages/TopicNav"));
// const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
// const Collection = React.lazy(() => import ("./pages/Collection"));
const SomePeople = React.lazy(() => import("./pages/SomePeople"));
const SearchResult = React.lazy(() => import("./pages/SearchResult"));

const clientInfo = {
  httpLink: createHttpLink({uri:"/graphql"}),
  authLink: setContext((_, {headers}) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  })
}

const client = new ApolloClient({
  link: clientInfo.authLink.concat(clientInfo.httpLink),
  cache: new InMemoryCache()
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Suspense fallback={<div>Loading...</div>}><NavBar/></React.Suspense>
          <Routes>
            <Route exact path="/" element={<React.Suspense><Home/></React.Suspense>}/>
            <Route exact path="/topics" element={<React.Suspense><TopicNav/></React.Suspense>}/>
            <Route exact path="/topic/:topicRealId" element={<React.Suspense><Topic/></React.Suspense>}/>

            <Route exact path="/author/:authorRealId" element={<React.Suspense><Author/></React.Suspense>}/>
            <Route exact path="/somepeople" element={<React.Suspense><SomePeople/></React.Suspense>}/>

            <Route exact path="/quote/:quoteRealId" element={<React.Suspense><Quote/></React.Suspense>}/>

            <Route exact path="/search/:query" element={<React.Suspense><SearchResult/></React.Suspense>}/>
          </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App;
