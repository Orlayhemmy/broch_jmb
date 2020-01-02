import React from 'react'
import {
  Home,
  Brochure,
  Faq,
  CutOffs,
  Centers,
  Report,
} from '..'
import {
  home, brochure, center, cutoff, faq, report
} from './images'

export const menuItems = [
  {
    name: 'Home',
    image: home,
    view: <Home />
  },
  {
    name: 'brochure',
    image: brochure,
    view: <Brochure />
  },
  {
    name: 'cut offs',
    image: cutoff,
    view: <CutOffs />
  },
  {
    name: 'centers',
    image: center,
    view: <Centers />
  },
  {
    name: 'faq',
    image: faq,
    view: <Faq />
  },
  {
    name: 'report',
    image: report,
    view: <Report />
  },
]
