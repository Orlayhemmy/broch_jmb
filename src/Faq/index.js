import React, { Component } from 'react';
import {
  Text, View, StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { Header, CollapsibleList } from '../Common';

export default class Faq extends Component {
  state = {
    faqs: [
      {
        ques: 'How to use the App',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing
        lore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est
        laborum`
      },
      {
        ques: 'What is the App about?',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum`
      },
      {
        ques: 'Do I have to download the App every year?',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum`
      },
      {
        ques: 'Is the information in the App limited to JAMB only?',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum`
      },
      {
        ques: 'How do I make suggestions/complaints if I have any?',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum`
      },
      {
        ques: 'How frequently is the information in the App updated?',
        response: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum`
      },
    ],
    revealRest: false,
    activeItemIndex: null,
  }

  toggleActiveQuestion = (i, icon = true) => {
    const { revealRest, activeItemIndex } = this.state;
    (icon || (i !== activeItemIndex || !revealRest))
    && this.setState({
      activeItemIndex: i,
      revealRest: !((i === activeItemIndex && revealRest)),
    });
  }

  _renderFAQ = () => {
    const { revealRest, activeItemIndex, faqs } = this.state;

    return (
      faqs.map(({ ques, response }, i) => {
        const show = revealRest && activeItemIndex === i;
        return (
          <View style={[styles.faqSection]} key={i}>
            <TouchableWithoutFeedback onPress={() => this.toggleActiveQuestion(i, false)}>
              <View style={[{ padding: 30 }, show && { backgroundColor: '#03902420' }]}>
                <CollapsibleList
                  title={ques}
                  toggleActiveItem={() => this.toggleActiveQuestion(i)}
                  ftSize={28}
                  show={show}
                />
                {show && <Text style={styles.response}>{response}</Text>}
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })
    );
  }

  render() {
    return (
      <View>
        <Header title="Frequently Asked Questions" />
        {this._renderFAQ()}
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
    lineHeight: 35,
    justifyContent: 'space-evenly',
    textAlign: 'justify'
  }
});
