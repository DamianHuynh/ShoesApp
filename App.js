import React from 'react';
import { Provider } from 'react-redux';
import RootApp from './app/navigation';
import store from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

export default App;
