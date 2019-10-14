import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import Carousel from '../carousel/Carousel';
import PropTypes from 'prop-types';

export default class News extends Component {
  state = {
    currentIndex: 0,
    newsList: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        content: 'The information in this application is only related to the JOINT ADMISSION MATRICULATION BOARD (JAMB) Exams, and are subject to changes as deemed fit by the appropriate authorities',
      }
    ]
  }

  _renderNews = () => {
    return this.state.newsList.map(({ content }, i) => 
      <View style={styles.nw_content} key={i}>
        <View style={styles.nw_img_cont}>
          <Image style={styles.nw_img}></Image>
        </View>
        <Text style={styles.newsText}>
          {content}
          <Text onPress={this.props.toggleNewsList(i)}>...Read more</Text>
        </Text>
      </View>
    )
  }

  toggleActiveSlide = (index) => {
    this.setState({ currentIndex: this.state.currentIndex + 1 })
  }


  render() {
    const { newsList, currentIndex } = this.state;

    return (
      <View style={styles.carousel}>
        <Carousel
          content = {this._renderNews()}
          withPagination={true}
          shouldRotate={true}
          scrollEnabled={true}
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
    borderRadius: 150/2,
    backgroundColor: '#FFFCFC44',
  },
});

News.propTypes = {
  toggleNewsList: PropTypes.func.isRequired,
}