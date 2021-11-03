import React from 'react'

// HEADERS
export { default as HeaderBasic } from './headers/basic'
//export { default as HeaderLogo } from './headers/logo'
//export { default as HeaderLogo2 } from './headers/logo2'

// QUOTES
//export { default as QuoteBasic } from './quotes/basic'

// TAGLINES
//export { default as TaglineContent } from './taglines/content'
//export { default as TaglineBold } from './taglines/bold'

// FOOTERS
//export { default as FooterBasic } from './footers/basic'

export { default as Button } from './button'
export { default as TextField } from './textfield'
export { default as Switch } from './switch'

export const Blocks = {
  Root: ({ layout: Layout = React.Fragment, ...props }) => {
    return <Layout {...props} />
  }
}
