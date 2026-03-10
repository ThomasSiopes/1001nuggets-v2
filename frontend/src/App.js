import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

//Components
// import ErrorPage from "./components/ErrorPage";
const NavBar = React.lazy(() => import("./components/NavBar"));

//Pages
const Home = React.lazy(() => import("./pages/Home"))

const Author = React.lazy(() => import("./pages/Author"));
// const AuthorNav = React.lazy(() => import("./pages/AuthorNav"));
const Quote = React.lazy(() => import("./pages/Quote"));

const Topic = React.lazy(() => import("./pages/Topic"));
const TopicNav = React.lazy(() => import("./pages/TopicNav"));

const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
const Collection = React.lazy(() => import ("./pages/Collection"));

const TagNav = React.lazy(() => import("./pages/TagNav"));
const TagPage = React.lazy(() => import("./pages/TagPage"));

const PeopleNav = React.lazy(() => import("./pages/PeopleNav"));
const PeoplePage = React.lazy(() => import("./pages/PeoplePage"));

const ThingNav = React.lazy(() => import("./pages/ThingNav"));
const ThingPage = React.lazy(() => import("./pages/ThingPage"));

const EverywhereNav = React.lazy(() => import("./pages/EverywhereNav"));
const EverywherePage = React.lazy(() => import("./pages/EverywherePage"));

const SearchResult = React.lazy(() => import("./pages/SearchResult"));
// const HomeNav = React.lazy(() => import("./pages/HomeNav"));
const Publications = React.lazy(() => import("./pages/Publications"));

const GlossaryNav = React.lazy(() => import("./pages/GlossaryNav"));
const GlossaryIndex = React.lazy(() => import("./pages/GlossaryIndex"));

// Client & Cache Stuff
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

const cache = new InMemoryCache({
    typePolicies: {
      Author: { keyFields: ["realID"] },
      Topic: { keyFields: ["realID"] },
      Quote: { keyFields: ["realID"] },
      Collection: { keyFields: ["realID"] },
      People: { keyFields: ["realID"] },
      Thing: { keyFields: ["realID"] },
      Everywhere: { keyFields: ["realID"] },
      QOTD: { keyFields: ["index"] }
    },
});

await persistCache({
  cache,
  storage: new LocalStorageWrapper(window.localStorage)
});

const client = new ApolloClient({
  link: clientInfo.authLink.concat(clientInfo.httpLink),
  cache
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Suspense fallback={<div>Loading...</div>}><NavBar/></React.Suspense>
        <React.Suspense>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            
            <Route exact path="/topics" element={<TopicNav/>}/>
            <Route exact path="/topic/:topicRealId" element={<Topic/>}/>

            <Route exact path="/collections" element={<CollectionNav/>}/>
            <Route exact path="/collection/:collectionRealId" element={<Collection/>}/>

            <Route exact path="/authors" element={<TagNav/>}/>
            <Route exact path="/authortag/:tagId" element={<TagPage/>}/>
            <Route exact path="/author/:authorRealId" element={<Author/>}/>
            {/* <Route exact path="/authors" element={<AuthorNav/>}*/}

            <Route exact path="/everyone" element={<PeopleNav/>}/>
            <Route exact path="/person/:peopleRealId" element={<PeoplePage/>}/>

            <Route exact path="/everything" element={<ThingNav/>}/>
            <Route exact path="/thing/:thingRealId" element={<ThingPage/>}/>

            <Route exact path="/everywhere" element={<EverywhereNav/>}/>
            <Route exact path="/place/:everywhereRealId" element={<EverywherePage/>}/>

            <Route exact path="/quote/:quoteRealId" element={<Quote/>}/>

            <Route exact path="/search/:query" element={<SearchResult/>}/>

            <Route exact path="/publications" element={<Publications/>}/>

            <Route exact path="/glossary" element={<GlossaryNav/>}/>
            <Route exact path="/glossary/:typing" element={<GlossaryIndex/>}/>

            {/* <Route exact path="/more quotes" element={<HomeNav/>}*/}
          </Routes>
        </React.Suspense>
      </Router>
    </ApolloProvider>
  )
}

export default App;