import { View, Text, AppRegistry } from 'react-native';
import React, { Component } from 'react';
import Header from './components/header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Hello world.</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
