import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
// import ErrorPage from "./components/ErrorPage";
const NavBar = React.lazy(() => import("./components/NavBar"));

//Pages
const Main = React.lazy(() => import("./pages/main"));
const Author = React.lazy(() => import ("./pages/Author"));
const Topic = React.lazy(() => import ("./pages/Topic"));
const Quote = React.lazy(() => import ("./pages/Quote"));
const TopicNav = React.lazy(() => import ("./pages/TopicNav"));
// const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
// const Collection = React.lazy(() => import ("./pages/Collection"));
const SomePeople = React.lazy(() => import ("./pages/SomePeople"));
const SearchResult = React.lazy(() => import ("./pages/SearchResult"));

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
        <React.Suspense fallback="Loading navbar..."><NavBar/></React.Suspense>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/topics" element={<TopicNav/>}/>
          <Route exact path="/topic/:topicRealId" element={<Topic/>}/>

          <Route exact path="/author/:authorRealId" element={<Author/>}/>
          {/* <Route exact path="/somepeople" element={<SomePeople/>}/> */}

          <Route exact path="/quote/:quoteRealId" element={<Quote/>}/>

          <Route exact path="/search/:query" element={<SearchResult/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App;
