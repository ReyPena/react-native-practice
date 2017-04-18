import { View, AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
