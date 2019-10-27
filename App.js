import React, { Component, createRef } from 'react';
import { ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import {
  Carousel,
  Home,
  Brochure,
  Faq,
  CutOffs,
  Centers,
  Report,
  MenuControls
} from './src';
import { background } from './src/utils/images';


export default class App extends Component {
  carousel = createRef();

  menuControl = createRef();

  state = {
    viewsArr: [<Home />, <Brochure />, <CutOffs />, <Centers />, <Faq />, <Report />],
  }

  toggleMenu = () => this.menuControl.current.state.isMenuVisible && this.menuControl.current.toggleMenu();

  /* eslint react/destructuring-assignment: 0 */
  _renderViews = () => this.state.viewsArr.map((view, i) => (
    <View key={i}>
      {view}
    </View>
  ))

  changeView = (i) => {
    this.toggleMenu();
    this.carousel.current._snapToItem(i);
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <View style={{ flex: 1 }}>
            <Carousel
              content={this._renderViews()}
              ref={this.carousel}
            />
          </View>
        </TouchableWithoutFeedback>
        <MenuControls ref={this.menuControl} changeView={this.changeView} />
      </ImageBackground>
    );
  }
}
