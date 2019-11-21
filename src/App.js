import React from 'react';
import ReactDOM from 'react-dom';
import { Base } from './Base/Base';
import { Provider } from './api/Provider/Provider';

/**
 * Provides the <Base /> with the state
 */
const App = () => {
  return (
    <Provider>
      <Base />
    </Provider>
  )
}

ReactDOM.render(
  React.createElement('div', {}, <App />),
  document.getElementById('root')
);