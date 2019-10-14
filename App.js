import React, { Component, createRef } from 'react';
import { ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import Carousel from './src/carousel/Carousel';
import Home from './src/home/Home';
import Brochure from './src/menu/Menu';
import Faq from './src/faq/Faq';
import CutOffs from './src/menu/Menu';
import Centers from './src/centers/Centers';
import Report from './src/report/Report';
import Menu from './src//menu/Menu';
import MenuControls from './src/menu/MenuControls';


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
