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


const PageContent = ({toggleMenu, children }) => (
  <TouchableWithoutFeedback onPress={toggleMenu}>
      <View style={{flex:1}}>
        {children}
      </View>
    </TouchableWithoutFeedback>
)

export default class App extends Component {
  carousel = createRef();
  menuControl = createRef();

  state = {
    viewsArr: [<Home />, <Brochure />, <CutOffs />, <Centers />, <Faq />, <Report />],
  }

  toggleMenu = () => this.menuControl.current.state.isMenuVisible && this.menuControl.current.toggleMenu();

  _renderViews = () => {
    return this.state.viewsArr.map((view, i)=> 
      <View key={i}>
        {view}
      </View>
    )
  }

  changeView = i => {
    this.toggleMenu();
    this.carousel.current._snapToItem(i);
  }

  render() {
    return (
      <ImageBackground
        source={require('./image/university_students.jpg')}
        style={{flex: 1}}
      >
        <TouchableWithoutFeedback onPress={this.toggleMenu}> 
          <View style={{flex:1}}>
            <Carousel
              content={this._renderViews()}
              ref={this.carousel}
            />
          </View>
        </TouchableWithoutFeedback>
        <MenuControls ref={this.menuControl} changeView={this.changeView}/>
      </ImageBackground>
    );
  }
}
