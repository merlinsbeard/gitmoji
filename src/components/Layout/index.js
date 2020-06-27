// @flow
import * as React from 'react'

import { IconDefinitions } from '../Icon'

type Props = { headerWithSocialButtons: boolean, children: React.Node }

const Layout = (props: Props) => (
  <>
    <main className="wrap">{props.children}</main>
  </>
)

export default Layout
