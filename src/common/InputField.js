import React from 'react';
import {
  TextInput, StyleSheet, Text, View
} from 'react-native';
import { Fonts } from '../utils';

const InputField = (props) => {
  const {
    title, isMultiline, handleChange, err
  } = props;

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.label}>{title}</Text>
      {err && <Text style={styles.err}>{err}</Text>}
      <TextInput
        style={styles.input}
        placeholder={title}
        multiline
        numberOfLines={isMultiline ? 5 : null}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 28,
    color: '#013E0F',
    fontFamily: Fonts.RobotoRegular,
  },
  err: {
    fontStyle: 'italic',
    color: 'red',
    fontSize: 18,
  },
  input: {
    paddingLeft: 20,
    marginTop: 15,
    minHeight: 80,
    borderColor: '#00000020',
    borderWidth: 1,
    backgroundColor: '#5C940020',
    fontSize: 24,
    fontFamily: Fonts.RobotoRegular,
  },
});

export default InputField
