import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { Header, CollapsibleList } from '../Common';

export default class Centers extends Component {
  state = {
    centers: {
      lagos: {},
      osun: {}
    },
    revealRest: false,
    activeItemIndex: null,
  }

  toggleActiveState = (i, icon = true) => {
    const { revealRest, activeItemIndex } = this.state;
    (icon || (i !== activeItemIndex || !revealRest))
    && this.setState({
      activeItemIndex: i,
      revealRest: !((i === activeItemIndex && revealRest)),
    });
  }

  // eslint-disable-next-line react/destructuring-assignment
  _renderCities = () => Object.entries(this.state.centers).map((entry, i) => (
    <View style={[styles.faqSection]} key={i}>
      <TouchableWithoutFeedback>
        <View style={[{ padding: 30 }, { backgroundColor: '#03902420' }]}>
          <CollapsibleList
            title={entry[0]}
            toggleActiveItem={() => this.toggleActiveState(i)}
            ftSize={28}
            show
          />
          <Text style={styles.response}>{entry[1]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  ))

  _renderStateCenters = () => {
    const { revealRest, activeItemIndex } = this.state;

    // eslint-disable-next-line react/destructuring-assignment
    return Object.entries(this.state.centers).map((entry, i) => {
      const show = revealRest && activeItemIndex === i;

      return (
        <View style={[styles.faqSection]} key={i}>
          <TouchableWithoutFeedback onPress={() => this.toggleActiveState(i, false)}>
            <View style={[{ padding: 30 }, show && { backgroundColor: '#03902420' }]}>
              <CollapsibleList
                title={entry[0]}
                toggleActiveItem={() => this.toggleActiveState(i)}
                ftSize={28}
                show={show}
              />
              {show && this._renderCities(entry[1])}
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    });
  }

  render() {
    return (
      <View>
        <Header title="Approved CBT Centers" />
        {this._renderStateCenters()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  faqSection: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#039D2770',
  },
  question: {
    color: '#013E0F',
    fontSize: 28,
  },
  response: {
    color: '#4F6F0C',
    fontSize: 24,
    lineHeight: 30,
    justifyContent: 'space-evenly',
    textAlign: 'justify'
  }
});
