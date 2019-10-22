import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import * as serviceWorker from './serviceWorker';

import client from './services/apollo';
import store from './store';

const MyApp = () => (
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));

serviceWorker.unregister();