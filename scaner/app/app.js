import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Camera from 'react-native-camera';

export default class App extends Component {
  render() {
    return (
      <View>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          aspect={Camera.constants.Aspect.fill}>
          <Text>
            Hello
          </Text>
        </Camera>
      </View>
    );
  }
}
