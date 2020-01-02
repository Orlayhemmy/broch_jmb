import React, { Component, createRef } from 'react';
import {
  StyleSheet, Dimensions, View, Text, Animated, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView
} from 'react-native';
import { CollapsibleList } from '../Common';
import { Fonts } from '../utils/fonts';
import {
  nuc, student, thumb, kaduna, sule, closeBtn
} from '../utils/images';

let isHidden = true;
const newsContainerHeight = Dimensions.get('window').height;
const newsList = [{
  img: nuc,
  content: `Medable's mission is to get effective therapies to
  patients faster. We provide an end-to-end, cloud-based platform
  with a flexible suite of tools that allows patients, healthcare
  providers, clinical research organizations and pharmaceutical
  sponsors to work together as a team in clinical trials. Our
  solutions enable more efficient clinical research, more effective
  healthcare delivery, and more accurate precision and predictive
  medicine. Our target audiences are patients, providers, principal investigators,
  and innovators who work in the pharmaceutical industries`,
  title: 'lorep ipsum dolor sit',
}, {
  img: student,
  content: `Medable's mission is to get effective therapies to
  patients faster. We provide an end-to-end, cloud-based platform
  with a flexible suite of tools that allows patients, healthcare
  providers, clinical research organizations and pharmaceutical
  sponsors to work together as a team in clinical trials. Our
  solutions enable more efficient clinical research, more effective
  healthcare delivery, and more accurate precision and predictive
  medicine. Our target audiences are patients, providers, principal investigators,
  and innovators who work in the pharmaceutical industries`,
  title: 'lorep ipsum dolor sit',
}, {
  img: thumb,
  title: 'lorep ipsum dolor sit',
  content: `Medable's mission is to get effective therapies to
  patients faster. We provide an end-to-end, cloud-based platform
  with a flexible suite of tools that allows patients, healthcare
  providers, clinical research organizations and pharmaceutical
  sponsors to work together as a team in clinical trials. Our
  solutions enable more efficient clinical research, more effective
  healthcare delivery, and more accurate precision and predictive
  medicine. Our target audiences are patients, providers, principal investigators,
  and innovators who work in the pharmaceutical industries`
}, {
  img: kaduna,
  title: 'lorep ipsum dolor sit',
  content: `Medable's mission is to get effective therapies to
  patients faster. We provide an end-to-end, cloud-based platform
  with a flexible suite of tools that allows patients, healthcare
  providers, clinical research organizations and pharmaceutical
  sponsors to work together as a team in clinical trials. Our
  solutions enable more efficient clinical research, more effective
  healthcare delivery, and more accurate precision and predictive
  medicine. Our target audiences are patients, providers, principal investigators,
  and innovators who work in the pharmaceutical industries`
}, {
  img: sule,
  title: 'lorep ipsum dolor sit',
  content: `Medable's mission is to get effective therapies to
  patients faster. We provide an end-to-end, cloud-based platform
  with a flexible suite of tools that allows patients, healthcare
  providers, clinical research organizations and pharmaceutical
  sponsors to work together as a team in clinical trials. Our
  solutions enable more efficient clinical research, more effective
  healthcare delivery, and more accurate precision and predictive
  medicine. Our target audiences are patients, providers, principal investigators,
  and innovators who work in the pharmaceutical industries`
}];

export default class NewsExpanded extends Component {
  state = {
    bounceValue: new Animated.Value(newsContainerHeight - 20), // This is the initial position of the subview
    subViewStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      height: newsContainerHeight - 20,
      flex: 1,
    },
    newsList: [],
    revealRest: false,
    activeItemIndex: null,
  };

  collapsibleList = createRef();

  componentDidMount() {
    const newArr = newsList.map((el) => ({
      ...el,
      intro: el.content.slice(0, 270),
      content: el.content.slice(270)
    }));
    this.setState({
      newsList: newArr
    });
  }

  toggleNews = (i) => {
    let toValue = newsContainerHeight;
    if (isHidden) {
      toValue = 0;
    }
    Animated.spring(
      // eslint-disable-next-line react/destructuring-assignment
      this.state.bounceValue,
      {
        toValue,
        tension: 4,
        friction: 8,
        useNativeDriver: true,
      }
    ).start();

    isHidden = !isHidden;
    this.toggleActiveNews(i);
  }

  toggleActiveNews = (i, icon = true) => {
    const { revealRest, activeItemIndex } = this.state;

    (icon || (i !== activeItemIndex || !revealRest))
    && this.setState({
      activeItemIndex: i,
      revealRest: !((i === activeItemIndex && revealRest)),
    });
  }

  renderNews = () => {
    const { revealRest, activeItemIndex } = this.state;

    // eslint-disable-next-line react/destructuring-assignment
    return this.state.newsList.map((news, i) => {
      const show = revealRest && activeItemIndex === i;

      return (
        <TouchableWithoutFeedback onPress={() => this.toggleActiveNews(i, false)} key={i}>
          <Animated.View style={[styles.detailsContainer, show && { backgroundColor: '#03902420' }]}>
            <View style={[styles.detailsSubCont, show && { flexDirection: 'column' }]}>
              <View style={[styles.intro, show && { flex: 0 }]}>
                <View style={styles.detailsImg}>
                  <Image source={news.img} style={styles.nw_img} />
                </View>
                <View style={styles.newsIntro}>
                  <CollapsibleList
                    title={news.title}
                    isUpperCase
                    toggleActiveItem={() => this.toggleActiveNews(i)}
                    ftSize={20}
                    show={show}
                  />
                  <View>
                    <Text style={styles.nw_intro}>{news.intro}</Text>
                  </View>
                </View>
              </View>
              {show && <View><Text style={styles.nw_intro}>{news.content}</Text></View>}
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    });
  }

  render() {
    const { subViewStyle, bounceValue } = this.state;

    return (
      <Animated.View
        style={[subViewStyle,
          { transform: [{ translateY: bounceValue }] }]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Trending News</Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.toggleNews}
            style={styles.cl_img_cont}
          >
            <Image source={closeBtn} style={styles.cl_img} />
          </TouchableOpacity>
        </View>
        <View style={styles.bd}>
          <ScrollView>
            {this.renderNews()}
          </ScrollView>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#039D27',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: Fonts.RobotoBold,
  },
  cl_img_cont: {
    position: 'absolute',
    right: 25,
  },
  cl_img: {
    width: 38,
    height: 30,
  },
  bd: {
    flex: 16,
  },
  detailsContainer: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
  detailsSubCont: {
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
  },
  intro: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsImg: {
    flex: 1,
  },
  nw_img: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  newsIntro: {
    flex: 3,
    flexDirection: 'column',
  },
  nw_intro: {
    color: '#4F6F0C',
    fontSize: 24,
    lineHeight: 35,
    justifyContent: 'space-evenly',
    textAlign: 'justify'
  }
});
