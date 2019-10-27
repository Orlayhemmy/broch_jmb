/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';
import { home } from '../utils/images'

const Header = (props) => (
  <View style={styles.titleContainer}>
    <Image
      source={home}
      style={{
        width: 30, height: 30, position: 'absolute', left: 30
      }}
    />
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

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
    fontWeight: '800',
    margin: 12
  },
});

export default Header
