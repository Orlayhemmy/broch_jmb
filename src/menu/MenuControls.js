import React, { Component, Fragment } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Menu from './Menu';

export default class MenuControls extends Component {
  state = {
    isMenuVisible: false,
  }

  toggleMenu = () => this.setState({ isMenuVisible: !this.state.isMenuVisible });

  render() {
    const { isMenuVisible } = this.state;
    
    return (
      <Fragment>
         {!isMenuVisible &&
          <View style={styles.navigation}>
            <TouchableHighlight opacity={1} style={{flex: 1}} onPress={this.toggleMenu}>
              <View></View>
            </TouchableHighlight>
          </View>
        }
        <Menu changeView={this.props.changeView} isMenuVisible={isMenuVisible} />
      </Fragment>
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
    borderRadius: 100/2,
    backgroundColor: '#FFFFFF30',
    alignSelf: 'flex-end',
  },
})