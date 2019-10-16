import { ApolloClient } from 'apollo-client';
import { InMemoryCache, ApolloLink, HttpLink } from "apollo-boost";

const httpLink = new HttpLink({ uri: 'https://daily-diet-node.herokuapp.com' });

const authLink = new ApolloLink((operation, forward) => {
    const token = "";
  
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  
    return forward(operation);
});

  
const client = new ApolloClient({
    link: httpLink, //verificar isso aqui ---> .concat(authLink),
    cache: new InMemoryCache(),
});

export default client;