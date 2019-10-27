import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Menu from '.';

export default class MenuControls extends Component {
  state = {
    isMenuVisible: false,
  }

  toggleMenu = () => this.setState((prevState) => ({
    isMenuVisible: !prevState.isMenuVisible
  }))

  render() {
    const { isMenuVisible } = this.state
    const { changeView } = this.props

    return (
      <>
        {!isMenuVisible
          && (
          <View style={styles.navigation}>
            <TouchableHighlight opacity={1} style={{ flex: 1 }} onPress={this.toggleMenu}>
              <View />
            </TouchableHighlight>
          </View>
          )}
        <Menu changeView={changeView} isMenuVisible={isMenuVisible} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  navigation: {
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: 0,
    margin: 30,
    right: 0,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF30',
    alignSelf: 'flex-end',
  },
});
