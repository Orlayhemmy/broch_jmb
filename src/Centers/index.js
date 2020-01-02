import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableWithoutFeedback, ScrollView
} from 'react-native';
import { Header, CollapsibleList } from '../Common'
import { api, useEffectAsync } from '../utils';

const styles = StyleSheet.create({
  faqSection: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#039D2770',
  },
  question: {
    color: '#013E0F',
    fontSize: 28,
  },
  response: {
    color: '#4F6F0C',
    fontSize: 24,
    lineHeight: 30,
    justifyContent: 'space-evenly',
    textAlign: 'justify'
  }
})

const Centers = () => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [revealRest, toggleActiveState] = useState(false)
  const [activeItemIndex, setActiveItem] = useState(null)

  useEffectAsync(async () => {
    setStates(await api('states'))
  }, [])

  const steps = (show, i, id) => {
    !show && fetchCities(id)
    toggle(i, false)
  }
  const fetchCities = async (id) => {
    setCities(await api('cities', `sid=${id}`))
  }

  const toggle = (i, icon = true) => {
    if (icon || (i !== activeItemIndex || !revealRest)) {
      setActiveItem(i)
      toggleActiveState(!((i === activeItemIndex && revealRest)))
    }
  }

  const _renderCities = () => cities.map(({ city_name: name }, i) => (
    <View style={[styles.faqSection]} key={i}>
      <TouchableWithoutFeedback>
        <View style={[{ padding: 30 }, { backgroundColor: '#03902420' }]}>
          <CollapsibleList
            title={name}
            toggleActiveItem={() => toggle(i)}
            ftSize={28}
            show
          />
          {/* <Text style={styles.response}>{entry[1]}</Text> */}
        </View>
      </TouchableWithoutFeedback>
    </View>
  ))

  const _renderStateCenters = () => states.map(({ name, state_id: sid }, i) => {
    const show = revealRest && activeItemIndex === i;

    return (
      <View style={[styles.faqSection]} key={i}>
        <TouchableWithoutFeedback onPress={() => steps(show, i, sid)}>
          <View style={[{ padding: 30 }, show && { backgroundColor: '#03902420' }]}>
            <CollapsibleList
              title={name}
              toggleActiveItem={() => toggle(i)}
              ftSize={28}
              show={show}
            />
            {show && _renderCities()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  })

  return (
    <View>
      <Header title="Approved CBT Centers" />
      <ScrollView>
        {_renderStateCenters()}
      </ScrollView>
    </View>
  );
}

export default Centers
