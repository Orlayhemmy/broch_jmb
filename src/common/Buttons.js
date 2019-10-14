import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../utils';

export default class Buttons extends Component {
  render() {
    const { title, click } = this.props;
    
    return (
      <TouchableOpacity activeOpacity={.95} onPress={click}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {marginTop: 30, minHeight: 70, backgroundColor: '#009422', justifyContent: 'center', alignItems: 'center', borderRadius: 7},
  buttonText: {color: '#ffffff', fontSize: 24, fontFamily: Fonts.RobotoRegular, fontWeight: "800"}
})
