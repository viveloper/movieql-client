import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import apolloClient from './apolloClient';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/details/:movieId" component={Details} />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
