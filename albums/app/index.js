import { Text, AppRegistry } from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <Text>Hello world.</Text>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
