import { View, Text, AppRegistry } from 'react-native';
import React, { Component } from 'react';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
        <Text>Hello world.</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
