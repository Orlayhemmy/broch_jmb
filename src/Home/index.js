import React, { Component, createRef } from 'react';
import {
  StyleSheet,
  Text, View, Image
} from 'react-native';
import News from '../News';
import NewsExpanded from '../News/NewsExpanded';
import { jambLogo } from '../utils/images'

export default class Home extends Component {
  newsExpanded = createRef();

  toggleNews = (i) => () => {
    this.newsExpanded.current.toggleNews(i);
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={styles.topContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={jambLogo}
                style={styles.logo}
              />
            </View>
            <View style={styles.messageContainer}>
              <View style={styles.message}>
                <Text style={styles.introMessage}>
                  The information in this application is only related to the JOINT ADMISSION
                  MATRICULATION BOARD (JAMB) Exams, and are subject to changes as
                  deemed fit by the appropriate authorities.
                  {' '}
                  {'\n'}
The information in this application is only
                  related to the JOINT ADMISSION MATRICULATION BOARD (JAMB) Exams,
                  and are subject to changes as deemed fit by the appropriate authorities.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.newsContainer}>
            <News style={{ flex: 1.5 }} toggleNewsList={this.toggleNews} />
            <View style={styles.navigationContainer} />
          </View>
        </View>
        <NewsExpanded ref={this.newsExpanded} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.75,
  },
  body: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 260,
    height: 245,
  },
  messageContainer: {
    flex: 0.52,
  },
  message: {
    flex: 1,
    margin: 25,
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: '#EAECE596',
  },
  introMessage: {
    fontSize: 32,
    textAlign: 'center',
    margin: 20,
    color: '#013E0F',
    lineHeight: 43,
  },
  newsContainer: {
    flex: 0.25,
    backgroundColor: '#039D27',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  news: {
    margin: 20,
    flex: 1,
  },
  navigationContainer: {
    flex: 0.5,
  },
  slider: {
    flex: 7,
  },
  menu_nav_cont: {
    flex: 1,
  },
  navigation: {
    flex: 1,
    height: 100,
    width: 100,
    position: 'absolute',
    top: -30,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF48',
    alignSelf: 'flex-end',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuImage: {
    backgroundColor: '#FFFFCC',
    height: 500,
  },
});
