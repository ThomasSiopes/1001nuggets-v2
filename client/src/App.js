import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, newTheme, GlobalStyles } from "./assets/css/themes";

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
import Scoreboard from "./pages/Scoreboard";

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
  const [theme] = useState("no");

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme === "default" ? defaultTheme : newTheme}>
          <GlobalStyles/>
          <NavBar/>
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
              <Route exact path="/topics">
                <TopicNav/>
              </Route>
              <Route exact path="/authors">
                <AuthorNav/>
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
              <Route exact path="/0504">
                <Scoreboard/>
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
