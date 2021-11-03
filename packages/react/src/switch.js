/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ControlType, applyPropertyControls } from 'property-controls'
import { Switch as SwitchMUI } from '@material-ui/core'

const Switch = (props) => {
  return <SwitchMUI {...props} fullWidth />
}

applyPropertyControls(Switch, {
  color: {
    title: 'Color',
    type: ControlType.Enum,
    defaultValue: 'primary',
    options: ['default', 'inherit', 'primary', 'secondary']
  }
})

Switch.usage = `
    <Switch color="primary" defaultChecked />
`

export default Switch
