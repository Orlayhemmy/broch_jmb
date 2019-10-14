import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.titleContainer}>
          <Image source={require('../../image/home.png')} style={{width: 30, height: 30, position: "absolute", left: 30}}></Image>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#039D27',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: "800",
    margin: 12
  },
});
