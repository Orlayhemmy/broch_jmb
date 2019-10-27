/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel from '../Carousel';

export default class News extends Component {
  state = {
    currentIndex: 0,
    newsList: [
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      },
      {
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      }
    ]
  }

  _renderNews = () => this.state.newsList.map(({ content }, i) => (
    <View style={styles.nw_content} key={i}>
      <View style={styles.nw_img_cont}>
        <Image style={styles.nw_img} />
      </View>
      <Text style={styles.newsText}>
        {content}
        <Text onPress={this.props.toggleNewsList(i)}>...Read more</Text>
      </Text>
    </View>
  ))

  toggleActiveSlide = () => {
    this.setState((prevState) => ({ currentIndex: prevState.currentIndex + 1 }))
  }


  render() {
    return (
      <View style={styles.carousel}>
        <Carousel
          content={this._renderNews()}
          withPagination
          shouldRotate
          scrollEnabled
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bd: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  carousel: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  nw_content: {
    flex: 1,
    flexDirection: 'row',
  },
  newsText: {
    flex: 3.1,
    color: '#FFFFFF',
    margin: 20,
    lineHeight: 30,
    textAlign: 'justify',
    fontSize: 20,
  },
  newsList: {
    flex: 3,
    flexDirection: 'row',
  },
  nw_img_cont: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  nw_img: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FFFCFC44',
  },
});

News.propTypes = {
  toggleNewsList: PropTypes.func.isRequired,
};
