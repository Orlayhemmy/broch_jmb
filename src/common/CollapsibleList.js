import React, { Component, Fragment } from 'react';
import {Text, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Fonts } from '../utils';

export default class CollapsibleList extends Component {
  state = {
    collapseButton: require('../../image/collapse-arrow.png'),
    expandButton: require('../../image/expand-arrow.png'),
  }

  render() {  
    const { expandButton, collapseButton } = this.state;
    const { show, isUpperCase, title, ftSize } = this.props;
    
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={[{fontSize: ftSize, color: '#013E0F', marginBottom: 10}, isUpperCase && {textTransform: 'uppercase', fontFamily: Fonts.RobotoBold}]}>{title}</Text>
        <TouchableWithoutFeedback onPress={this.props.toggleActiveItem}>
          <Image source={show ? collapseButton : expandButton} style={{height: 25, width: 25, right: 5, position: 'absolute'}}></Image>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}