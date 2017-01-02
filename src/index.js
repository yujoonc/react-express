import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import reducers from './reducers';


// const store = createStore(reducers);
let rootElement = document.getElementById('root');


ReactDOM.render(
        <App />,
    rootElement);

/*<Provider store={store}>
 <App />
 </Provider>*/