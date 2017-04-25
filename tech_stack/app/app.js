import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
  const { mainViewStyle } = styles;

  return (
    <Provider store={createStore(reducers)}>
      <View style={mainViewStyle}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

const styles = {
  mainViewStyle: {
    flex: 1
  }
};

export default App;
