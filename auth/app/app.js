import { View, Text } from 'react-native';
import React, { Component } from 'react';

import { Header, Button, CardSection, Card } from './components/common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Card>
          <CardSection>
            <Button>Test</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}
