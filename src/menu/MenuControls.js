import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Menu from '.';
import { ActivePageContext, Theme } from '../utils';

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
      <ActivePageContext.Consumer>
        {({ menuItems, currentTheme = 'primary' }) => (
          <>
            {!isMenuVisible && (
              <View style={[styles.navigation, Theme[`${currentTheme}`]]}>
                <TouchableHighlight opacity={1} style={{ flex: 1 }} onPress={this.toggleMenu}>
                  <View />
                </TouchableHighlight>
              </View>
            )}
            <Menu
              menuItems={menuItems}
              changeView={changeView}
              isMenuVisible={isMenuVisible}
              theme={currentTheme}
            />
          </>
        )}
      </ActivePageContext.Consumer>
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
    alignSelf: 'flex-end',
  },
});
