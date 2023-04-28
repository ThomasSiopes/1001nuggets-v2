import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
// import { FaSun, FaMoon } from "react-icons/fa";
import { lightTheme, darkTheme, GlobalStyles } from "./assets/css/themes";

//Components
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

//Pages
// const Home = React.lazy(() => import ("./pages/Main"));
const Author = React.lazy(() => import ("./pages/Author"));
const Topic = React.lazy(() => import ("./pages/Topic"));
const Quote = React.lazy(() => import ("./pages/Quote"));
const Collection = React.lazy(() => import ("./pages/Collection"));
// const AuthorNav = React.lazy(()=> import ("./pages/AuthorNav"));
const TopicNav = React.lazy(() => import ("./pages/TopicNav"));
const CollectionNav = React.lazy(() => import ("./pages/CollectionNav"));
const SearchResult = React.lazy(() => import ("./pages/SearchResult"));

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const StyledApp = styled.div``;

function App() {
  const [theme] = useState("light");

  // const themeDark = () => {
  //   setTheme("dark");
  // }

  // const themeLight = () => {
  //   setTheme("light");
  // }

  // const handleChange = () => {
  //   let currentTheme = document.getElementById("theme-switch");
  //   if(currentTheme && currentTheme.checked) { themeDark() } else { themeLight() }
  // }

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles/>
          <NavBar/>
          {/* <Container className="d-flex align-items-center mb-3">
            <FaSun className="text-theme mx-2"/>
            <label className="switch">
              <input type="checkbox" id="theme-switch" onClick={() => handleChange()}/>
              <span className="slider round"/>
            </label>
            <FaMoon className="text-theme mx-2"/>
          </Container> */}
          <StyledApp className="mainBody">
            <Switch>
              <Route exact path="/">
                <React.Suspense fallback="Loading page...">
                  <TopicNav/>
                </React.Suspense>
              </Route>
              <Route exact path="/author/:authorRealId">
                <React.Suspense fallback="Loading page...">
                  <Author/>
                </React.Suspense>
              </Route>
              <Route exact path="/topic/:topicRealId">
                <React.Suspense fallback="Loading page...">
                  <Topic/>
                </React.Suspense>
              </Route>
              <Route exact path="/quote/:quoteRealId">
                <React.Suspense fallback="Loading page...">
                  <Quote/>
                </React.Suspense>
              </Route>
              <Route exact path="/collection/:collectionRealId">
                <React.Suspense fallback="Loading page...">
                  <Collection/>
                </React.Suspense>
              </Route>
              <Route exact path="/topics">
                <React.Suspense fallback="Loading page...">
                  <TopicNav/>
                </React.Suspense>
              </Route>
              {/* <Route exact path="/authors">
                <React.Suspense fallback="Loading page...">
                  <AuthorNav/>
                </React.Suspense>
              </Route> */}
              <Route exact path="/collections">
                <React.Suspense fallback="Loading page...">
                  <CollectionNav/>
                </React.Suspense>
              </Route>
              <Route exact path="/search/:query">
                <React.Suspense fallback="Loading results...">
                  <SearchResult/>
                </React.Suspense>
              </Route>
              <Route component={ErrorPage}/>
            </Switch>
          </StyledApp>
          {/* <Footer/> */}
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
