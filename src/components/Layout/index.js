// @flow
import * as React from 'react'

import { IconDefinitions } from '../Icon'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

type Props = { headerWithSocialButtons: boolean, children: React.Node }

const Layout = (props: Props) => (
  <>
    <main className="wrap">{props.children}</main>
  </>
)

export default Layout
