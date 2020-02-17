import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    // 1. Where is the element right now?
    this.position = new Animated.ValueXY(0, 0);

    // 2. Where is the element moving to?
    // spring -> Move the position
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
    }).start();
  }

  render() {
    return (
      // 3. Which element are we moving?
      // Animated.View element we are moving
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
};

export default Ball;
