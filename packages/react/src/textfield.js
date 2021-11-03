/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ControlType, applyPropertyControls } from 'property-controls'
import { TextField as TextFieldMUI } from '@material-ui/core'

const TextField = (props) => {
  return <TextFieldMUI {...props} fullWidth />
}

applyPropertyControls(TextField, {
  label: {
    title: 'Label',
    type: ControlType.String
  },
  placeholder: {
    title: 'Placeholder',
    defaultValue: 'placehoder',
    type: ControlType.String
  },
  variant: {
    title: 'Variant',
    type: ControlType.Enum,
    defaultValue: 'contained',
    options: ['contained', 'outlined', 'text']
  },
  helperText: {
    title: 'Helper text',
    type: ControlType.String
  }
})

TextField.usage = `
<TextField placeholder="placeholder input" />
`

export default TextField
