/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ControlType, applyPropertyControls } from 'property-controls'
import { Button as ButtonMUI } from '@material-ui/core'

const Button = (props) => {
  return <ButtonMUI {...props} />
}

applyPropertyControls(Button, {
  children: {
    type: ControlType.String
  },
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    defaultValue: 'contained',
    options: ['contained', 'outlined', 'text']
  },
  size: {
    title: 'Size',
    type: ControlType.Enum,
    defaultValue: 'medium',
    options: ['small', 'medium', 'large']
  },
  color: {
    title: 'Color',
    type: ControlType.Enum,
    defaultValue: 'primary',
    options: ['default', 'inherit', 'primary', 'secondary']
  }
})

Button.usage = `
  <Button variant='contained' color='primary'>button text</Button>
`

export default Button
