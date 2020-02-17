import React, { Component } from 'react';
import { View } from 'react-native';

import Ball from './src/Ball';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}
