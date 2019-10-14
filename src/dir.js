import React, { Component, createRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';

import Carousel from './carousel/Carousel';
import Home from './home/Home';
import Faq from './faq/Faq';
import CutOffs from './menu/Menu';
import Centers from './menu/Menu';
import Report from './menu/Menu';

export default class  Pages extends Component {
  carousel = createRef();

  state = {
    viewsArr: [<Home />, <Faq />,<CutOffs />, <Centers />, <Report />],
    isMenuVisible: false,
  }

  toggleMenu = () => this.setState({ isMenuVisible: !this.state.isMenuVisible });

  _renderViews = () => {
    return this.state.viewsArr.map((view, i)=> 
      <View key={i}>
        {view}
      </View>
    )
  }

  changeView = i => {
    this.toggleMenu();
    setTimeout(() =>this.carousel.current._snapToItem(i), 2000)
  }

  render() {
    const { isMenuVisible } = this.state;

    return (
      <TouchableWithoutFeedback onPress={isMenuVisible ? this.toggleMenu : null}>
        <View style={{flex:1}}>
          <Carousel
            content={this._renderViews()}
            scrollEnabled={false}
            ref={this.carousel}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}