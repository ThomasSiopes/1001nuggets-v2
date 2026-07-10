import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

//Components
// import ErrorPage from "./components/ErrorPage";
const NavBar = React.lazy(() => import("./components/NavBar"));
const Footer = React.lazy(() => import("./components/Footer"));

//Pages
const Home = React.lazy(() => import("./pages/Home"))

const Author = React.lazy(() => import("./pages/Author"));
const AuthorNav = React.lazy(() => import("./pages/AuthorNav"));
const Quote = React.lazy(() => import("./pages/Quote"));

const Topic = React.lazy(() => import("./pages/Topic"));
const TopicNav = React.lazy(() => import("./pages/TopicNav"));

const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
const Collection = React.lazy(() => import ("./pages/Collection"));

const AuthorCatalogueNav = React.lazy(() => import("./pages/AuthorCatalogueNav"));
const AuthorCataloguePage = React.lazy(() => import("./pages/AuthorCataloguePage"));

// const PeopleNav = React.lazy(() => import("./pages/PeopleNav"));
// const PeoplePage = React.lazy(() => import("./pages/PeoplePage"));

const QuoteCatalogueNav = React.lazy(() => import("./pages/QuoteCatalogueNav"));
const QuoteCataloguePage = React.lazy(() => import("./pages/QuoteCataloguePage"));

// const EverywhereNav = React.lazy(() => import("./pages/EverywhereNav"));
// const EverywherePage = React.lazy(() => import("./pages/EverywherePage"));

const SearchResult = React.lazy(() => import("./pages/SearchResult"));
// const HomeNav = React.lazy(() => import("./pages/HomeNav"));
const Publications = React.lazy(() => import("./pages/Publications"));

const GlossaryNav = React.lazy(() => import("./pages/GlossaryNav"));
const GlossaryIndex = React.lazy(() => import("./pages/GlossaryIndex"));

const ErrorPage = React.lazy(() => import("./pages/404error"));
const DNE = React.lazy(() => import("./pages/DNE"));

// Client & Cache Stuff
const clientInfo = {
  httpLink: createHttpLink({uri: "/graphql"}),
  // httpLink: createHttpLink({uri: (((window.location.hostname === "1001nuggets.com") || (window.location.hostname === "w1001nuggets.herokuapp.com") || (window.location.hostname === "localhost")) ? "/graphql" : process.env.REACT_APP_GRAPHQL_URI)}),
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

const cache = new InMemoryCache({
    typePolicies: {
      Author: { keyFields: ["realID"] },
      Topic: { keyFields: ["realID"] },
      Quote: { keyFields: ["realID"] },
      Collection: { keyFields: ["realID"] },
      People: { keyFields: ["realID"] },
      QuoteCatalogue: { keyFields: ["realID"] },
      Everywhere: { keyFields: ["realID"] },
      QOTD: { keyFields: ["index"] },
      Glossary: { keyFields: ["typing"] },
      GlossaryIndex: { keyFields: ["index"] },
    },
});

try {
  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.localStorage)
  });
} catch (e) {
  console.error('Cache restore failed, starting fresh:', e);
}

const client = new ApolloClient({
  link: clientInfo.authLink.concat(clientInfo.httpLink),
  cache
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Suspense fallback={<div>Loading...</div>}><NavBar/></React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            
            <Route exact path="/topics" element={<TopicNav/>}/>
            <Route exact path="/topic/:topicRealId" element={<Topic/>}/>

            <Route exact path="/collections" element={<CollectionNav/>}/>
            <Route exact path="/collection/:collectionRealId" element={<Collection/>}/>

            <Route exact path="/author/:authorRealId" element={<Author/>}/>
            <Route exact path="/authors" element={<AuthorNav/>}/>

            {/* <Route exact path="/everyone" element={<PeopleNav/>}/>
            <Route exact path="/person/:peopleRealId" element={<PeoplePage/>}/> */}

            <Route exact path="/author-catalogue" element={<AuthorCatalogueNav/>}/>
            <Route exact path="/author-catalogue/:authorCatRealId" element={<AuthorCataloguePage/>}/>
            <Route exact path="/quote-catalogue" element={<QuoteCatalogueNav/>}/>
            <Route exact path="/quote-catalogue/:quoteCatRealId" element={<QuoteCataloguePage/>}/>

            {/* <Route exact path="/everywhere" element={<EverywhereNav/>}/>
            <Route exact path="/place/:everywhereRealId" element={<EverywherePage/>}/> */}

            <Route exact path="/quote/:quoteRealId" element={<Quote/>}/>

            <Route exact path="/search/:query" element={<SearchResult/>}/>

            <Route exact path="/publications" element={<Publications/>}/>

            <Route exact path="/glossary" element={<GlossaryNav/>}/>
            <Route exact path="/glossary/:typing" element={<GlossaryIndex/>}/>

            {/* <Route exact path="/more quotes" element={<HomeNav/>}*/}

            <Route exact path="/404error" element={<ErrorPage/>}/>
            <Route path="*" element={<DNE/>}/>
          </Routes>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}><Footer/></React.Suspense>
      </Router>
    </ApolloProvider>
  )
}

export default App;