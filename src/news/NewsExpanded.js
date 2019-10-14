import React, { Component, createRef } from 'react';
import { StyleSheet, Dimensions, View, Text, Animated, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CollapsibleList from '../Common/CollapsibleList';
import { Fonts } from '../utils';

let isHidden = true;
const newsContainerHeight = Dimensions.get('window').height;
const newsList =  [{
  img: require('../../image/nuc.jpg'),
  content: 'Medable\'s mission is to get effective therapies to patients faster. We provide an end-to-end, cloud-based platform with a flexible suite of tools that allows patients, healthcare providers, clinical research organizations and pharmaceutical sponsors to work together as a team in clinical trials. Our solutions enable more efficient clinical research, more effective healthcare delivery, and more accurate precision and predictive medicine. Our target audiences are patients, providers, principal investigators, and innovators who work in the pharmaceutical industries.',
  title: 'lorep ipsum dolor sit',
},{
  img: require('../../image/student.jpeg'),
  content: 'The work I am most proud of is one with a team where we designed a web application for managing assets in a company. I was a front-end developer, and I synced with the Product designer to gain clarity and also add my inputs on designs he provided me. I also pair programmed with my team, lead in cases he wanted to add inputs or understand my programming thought in solving peculiar tasks. It is my most proud project of the moment as a front-end developer because the codebase was large and I gained a lot of experience interacting with the team lead, the product team and other stakeholders. The project is on GitHub, and its a private repository',
  title: 'lorep ipsum dolor sit',
},{
  img: require('../../image/thumb.jpeg'),
  title: 'lorep ipsum dolor sit',
  content: 'I once joined an existing team building a web application to track the usage of meeting rooms in a company, and integrate with Google API to utilize its calendar feature for booking the rooms as a technical team lead for the front-end developers. When I onboard the codebase and the web application, I discovered a flaw in the programming architecture employed at the commencement of the web application, which was resulting to the bugs encountered by the users. I made a recommendation that we go back to the drawing board to rethinking our programming approach and implementation. I came up with a better implementation, and the Product team accepted my idea but the Product manager was insistent that we had to make the existing app version bug free and working so that the stakeholders can test the features it\'s providing. I objected saying its better we concentrate the team\'s effort on making the app better rather than fixing bug on a web application with a faulty structure which would only lead to a waste of time and manpower, but she insisted we make the version one working before we implement my suggestion and the stakeholders need to test out the features the following week. I wasn\'t in agreement at first, but I had no choice than to shift the concentration of the developers into making the app bug free. I was also compelled to pick a task from the pivotal tracker board and work on it because the timeframe we had was short.',
},{
  img: require('../../image/kaduna.jpeg'),
  title: 'lorep ipsum dolor sit',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
},{
  img: require('../../image/sule.jpg'),
  title: 'lorep ipsum dolor sit',
  content: 'Medable\'s mission is to get effective therapies to patients faster. We provide an end-to-end, cloud-based platform with a flexible suite of tools that allows patients, healthcare providers, clinical research organizations and pharmaceutical sponsors to work together as a team in clinical trials. Our solutions enable more efficient clinical research, more effective healthcare delivery, and more accurate precision and predictive medicine. Our target audiences are patients, providers, principal investigators, and innovators who work in the pharmaceutical industries.',
}];

export default class NewsExpanded extends Component {
  state = {
    bounceValue: new Animated.Value(newsContainerHeight - 20),  //This is the initial position of the subview
    subViewStyle: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#FFFFFF",
      height: newsContainerHeight - 20,
      flex: 1,
    },
    newsList: [],
    revealRest: false,
    activeItemIndex: null,
    viewHeight: new Animated.Value(500),
  };

  componentDidMount() {
    const newArr = newsList.map(el => {
      return {
        ...el,
        intro: el.content.slice(0, 270),
        content: el.content.slice(270)
      };
    });
    this.setState({
      newsList: newArr
    })
  }

  toggleNews = i => {
    let toValue = newsContainerHeight;
    if(isHidden) {
      toValue = 0;
    }
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: toValue,
        tension: 4,
        friction: 8,
        useNativeDriver: true,
      }
    ).start();

    isHidden = !isHidden;
    this.toggleActiveNews(i);
  }

  collapsibleList = createRef();

  toggleActiveNews = (i, icon = true) => {
    const { revealRest, activeItemIndex} = this.state;
    
    (icon || (i !== activeItemIndex || !revealRest)) &&
    this.setState({
      activeItemIndex: i,
      revealRest: (i === activeItemIndex && revealRest) ? false : true,
    });
  }

  renderNews = () => { 
    const { revealRest, activeItemIndex } = this.state;
    
    return this.state.newsList.map((news, i) => {
      const show = revealRest && activeItemIndex  === i;

      return (
        <TouchableWithoutFeedback onPress={() => this.toggleActiveNews(i, false)} key={i}>
          <Animated.View style={[styles.detailsContainer, show && {backgroundColor: '#03902420'}]}>
            <View style={[styles.detailsSubCont, show && {flexDirection: 'column'}]}>
              <View style={[styles.intro, show && {flex: 0}]}>
                <View style={styles.detailsImg}>
                  <Image source={news.img} style={styles.nw_img}></Image>
                </View>
                <View style={styles.newsIntro}>
                  <CollapsibleList
                    title={news.title}
                    isUpperCase={true}
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
    })
  }

  render() {
    const { subViewStyle, header, isHidden } = this.state;

    return (
     <Animated.View
            style={[subViewStyle,
              {transform: [{translateY: this.state.bounceValue}]}]}
          >
            <View style={styles.header}>
              <Text style={styles.title}>Trending News</Text>
              <TouchableOpacity
                activeOpacity={1} onPress={this.toggleNews} style={styles.cl_img_cont}>
                <Image source={require('../../image/close.png')} style={styles.cl_img}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.bd}>
              <ScrollView>
                {this.renderNews()}
              </ScrollView>
            </View>
          </Animated.View>
    )
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
    borderRadius: 150/2,
  },
  newsIntro: {
    flex: 3,
    flexDirection: 'column',
  },
  nw_intro: {
    color: '#4F6F0C',
    fontSize: 24,
    lineHeight: 35,
    justifyContent: 'space-evenly' ,
    textAlign: 'justify'
  }
});