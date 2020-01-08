import React, { useState, createRef } from 'react';
import { ImageBackground, View, TouchableWithoutFeedback } from 'react-native';
import {
  Carousel,
  MenuControls
} from './src';
import {
  background
} from './src/utils/images';
import { ActivePageContext } from './src/utils';
import { menuItems } from './src/utils/menuItems'

const pickTheme = (page) => (['centers', 'report', 'faq'].includes(page)
  ? 'secondary'
  : 'primary')

const App = () => {
  const [currentTheme, setCurrentTheme] = useState('primary')

  const carousel = createRef();

  const menuControl = createRef();

  const toggleMenu = () => menuControl.current.state.isMenuVisible && menuControl.current.toggleMenu();

  /* eslint react/destructuring-assignment: 0 */
  const _renderViews = () => menuItems.map(({ view }, i) => (
    <View key={i}>
      {view}
    </View>
  ))

  const changeView = (i) => {
    carousel.current._snapToItem(i);
    toggleMenu();
    setTimeout(() => {
      setCurrentTheme(() => pickTheme(menuItems[i].name))
    }, 200)
  }

  return (
    <ImageBackground
      source={background}
      style={{ flex: 1 }}
    >
      <ActivePageContext.Provider value={{
        currentTheme,
        menuItems
      }}
      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={{ flex: 1 }}>
            <Carousel
              content={_renderViews()}
              ref={carousel}
            />
          </View>
        </TouchableWithoutFeedback>
        <MenuControls ref={menuControl} changeView={changeView} />
      </ActivePageContext.Provider>
    </ImageBackground>
  );
}

export default App
