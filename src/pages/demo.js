import React, { Fragment } from 'react'
import Editor from 'blocks-ui'
import * as Blocks from '@blocks/react'

import SEO from '../components/seo'

const JSX = `
import React from 'react'
import { Blocks, HeaderBasic } from '@blocks/react'

export default () => (
  <Blocks.Root>
  <Button color="primary" variant="contained">hi</Button>
    
  </Blocks.Root>
)
`

const Layout = (props) => {
  return <div className="layout">{props.children}</div>
}

const Demo = () => (
  <Fragment>
    <SEO title="Demo" />
    <Editor src={JSX} blocks={Blocks} layout={Layout} />
  </Fragment>
)

export default Demo
