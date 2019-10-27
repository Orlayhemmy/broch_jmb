import React from 'react';
import {
  Text, Image, TouchableWithoutFeedback, View
} from 'react-native';
import { collapseButton, expandButton } from '../utils/images';
import { Fonts } from '../utils';

export const CollapsibleList = (props) => {
  const {
    show, isUpperCase, title, ftSize, toggleActiveItem
  } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text
        style={[
          {
            fontSize: ftSize,
            color: '#013E0F',
            marginBottom: 10
          },
          isUpperCase && {
            textTransform: 'uppercase',
            fontFamily: Fonts.RobotoBold
          }
        ]}
      >
        {title}
      </Text>
      <TouchableWithoutFeedback onPress={toggleActiveItem}>
        <Image
          source={show ? collapseButton : expandButton}
          style={{
            height: 25, width: 25, right: 5, position: 'absolute'
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
