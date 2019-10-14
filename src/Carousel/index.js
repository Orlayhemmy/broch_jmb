import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback, ViewPagerAndroid } from 'react-native';
import PropTypes from 'prop-types';

export default class  Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      offset: 0,
    }
  }

  componentDidMount = () => {
    this.props.shouldRotate &&
    setInterval(() => {
      this.state.activeIndex < 2
        ? this._snapToItem(this.state.activeIndex + 1)
        : this._snapToItem(0)
    }, 5000)
  }

  _snapToItem = i => {
    this.viewPager.setPage(i)
    this.setState({ activeIndex: i })
  };

  _cycleItems = () => {
    this.setState((prevState) => { activeIndex: prevState.activeIndex + 1 })
  }

  activateSlideIcon = event => {
    this.setState({ activeIndex: event.nativeEvent.position })
  }

  pagination = data => {
    const { activeIndex } = this.state;
    return [...Array(3)].map((item, i) =>
      <TouchableWithoutFeedback onPress={() => this._snapToItem(i)} key={i}>
        <View style={[styles.sliderIcon, (activeIndex === i) && styles.activeSliderIcon]}></View>
      </TouchableWithoutFeedback>
    );
  }
  render() {
    const { content, withPagination, scrollEnabled } = this.props;
    const { activeIndex } = this.state;

    return (
      <View style={{flex: 1}}>
        <ViewPagerAndroid
          initialPage={0}
          style={styles.carousel}
          ref={viewPager => {
            this.viewPager = viewPager;
          }}
          scrollEnabled={scrollEnabled}
          onPageScroll = {(e) => this.activateSlideIcon(e)}
        >
          {content}
        </ViewPagerAndroid>
        {withPagination && 
        <View style={styles.sliderContainer}>
          <View style={styles.slider}>
            {this.pagination()}
          </View>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 2,
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: -30, 
  },
  slider: {
    flex: 1,
    flexDirection: 'row',
    left: '50%'
  },
  sliderIcon: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    backgroundColor: '#FFFCFC44',
    marginRight: 10,
  },
  activeSliderIcon: {
    backgroundColor: '#FFFFFFDE',
  }

});

Carousel.propTypes = {
  shouldRotate: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  withPagination: PropTypes.bool,
}

Carousel.defaultProps = {
  shouldRotate: false,
  scrollEnabled: false,
  withPagination: false,
}