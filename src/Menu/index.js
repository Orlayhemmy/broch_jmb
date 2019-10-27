import React, { Component } from 'react'
import {
  StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated
} from 'react-native';
import {
  home, brochure, center, cutoff, faq, report
} from '../utils/images'

export default class Menu extends Component {
  state = {
    menuItems: [
      {
        name: 'Home',
        image: home,
      },
      {
        name: 'brochure',
        image: brochure,
      },
      {
        name: 'cut offs',
        image: cutoff,
      },
      {
        name: 'centers',
        image: center,
      },
      {
        name: 'faq',
        image: faq,
      },
      {
        name: 'report',
        image: report,
      },
    ],
    bounceValue: new Animated.Value(200),
  }

  componentDidMount() {
    this.assignBounceValue();
  }

  componentDidUpdate() {
    this.displayMenu();
  }

  assignBounceValue = () => {
    this.setState((prevState) => ({
      menuItems: prevState.menuItems.map((item) => ({
        ...item,
        bounceValue: new Animated.Value(200)
      }))
    }))
  }

  displayMenu = () => {
    const { isMenuVisible } = this.props
    const { bounceValue, menuItems } = this.state

    const toValue = isMenuVisible ? 0 : 200;
    Animated.spring(
      bounceValue,
      {
        toValue,
        tension: 4,
        friction: 8,
        useNativeDriver: true,
      }
    ).start();
    menuItems.forEach((item, i) => {
      const itemToValue = isMenuVisible ? 0 : 200 * (2 ** i);

      Animated.spring(
        menuItems[i].bounceValue,
        {
          toValue: itemToValue,
          tension: 4,
          friction: 8,
          useNativeDriver: true,
        }
      ).start();
    });
  }

  render() {
    const { menuItems, bounceValue } = this.state;

    return (
      <Animated.View style={[styles.menu, { transform: [{ translateX: bounceValue }] }]}>
        <View style={{ marginTop: 30, marginBottom: 30 }}>
          {menuItems.map(({ name, image }, i) => (
            // eslint-disable-next-line react/destructuring-assignment
            <TouchableWithoutFeedback onPress={() => this.props.changeView(i)} key={i}>
              <Animated.View style={[styles.menuHolder,
                { transform: [{ translateX: menuItems[i].bounceValue || 0 }] }]}
              >
                <Image style={styles.menuImg} source={image} />
                <Text style={styles.menuItem}>{name}</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#ffffff80',
    position: 'absolute',
    width: 150,
    height: '100%',
    right: 0,
  },
  menuHolder: {
    height: 170,
    width: 170,
    borderRadius: 170 / 2,
    backgroundColor: '#FFFFFF',
    margin: 10,
    left: -33,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  menuItem: {
    fontSize: 28,
    padding: 5,
    color: '#009422',
    textTransform: 'capitalize',
  },
  menuImg: {
    width: 80,
    height: 78,
  }
});
