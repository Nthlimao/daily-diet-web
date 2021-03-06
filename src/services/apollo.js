import { ApolloClient } from 'apollo-client';
import { InMemoryCache, ApolloLink, HttpLink } from "apollo-boost";
import auth from '../auth';

const httpLink = new HttpLink({ uri: 'https://daily-diet-node.herokuapp.com' });

const authLink = new ApolloLink((operation, forward) => {
    const token = auth.token();
  
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  
    return forward(operation);
});

  
const client = new ApolloClient({    
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;