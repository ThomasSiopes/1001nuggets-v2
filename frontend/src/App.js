import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./assets/style.css";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
// import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";

//Pages
import Author from "./pages/Author";
import Topic from "./pages/Topic";
import Quote from "./pages/Quote";
import TopicNav from "./pages/TopicNav";
// const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
// const Collection = React.lazy(() => import ("./pages/Collection"));
import SomePeople from "./pages/SomePeople";
import SearchResult from "./pages/SearchResult";

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
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<TopicNav/>}/>
          <Route exact path="/topics" element={<TopicNav/>}/>
          <Route exact path="/topic/:topicRealId" element={<Topic/>}/>

          <Route exact path="/author/:authorRealId" element={<Author/>}/>
          <Route exact path="/somepeople" element={<SomePeople/>}/>

          <Route exact path="/quote/:quoteRealId" element={<Quote/>}/>

          <Route exact path="/search/:query" element={<SearchResult/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App;
