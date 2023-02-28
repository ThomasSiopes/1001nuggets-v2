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
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import PlatformMain from "./components/Platform/main";
import PlatformSpecific from "./components/Platform/specific";

//Pages
import Home from "./pages/Main";
import Author from "./pages/Author";
import Topic from "./pages/Topic";
import AuthorNav from "./pages/AuthorNav";
import TopicNav from "./pages/TopicNav";
import Quote from "./pages/Quote";
import SearchResult from "./pages/SearchResult";
import CollectionNav from "./pages/CollectionNav";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

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
                <Home/>
              </Route>
              <Route exact path="/author/:authorRealId">
                <Author/>
              </Route>
              <Route exact path="/topic/:topicRealId">
                <Topic/>
              </Route>
              <Route exact path="/quote/:quoteRealId">
                <Quote/>
              </Route>
              <Route exact path="/collection/:collectionRealId">
                <Collection/>
              </Route>
              <Route exact path="/topics">
                <TopicNav/>
              </Route>
              <Route exact path="/authors">
                <AuthorNav/>
              </Route>
              <Route exact path="/collections">
                <CollectionNav/>
              </Route>
              <Route exact path="/platforms">
                <PlatformMain/>
              </Route>
              <Route exact path="/platforms/:type">
                <PlatformSpecific/>
              </Route>
              <Route exact path="/search/:query">
                <SearchResult/>
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/signup">
                <SignUp/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route component={ErrorPage}/>
            </Switch>
          </StyledApp>
          <Footer/>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
