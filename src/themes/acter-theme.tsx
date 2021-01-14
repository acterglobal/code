import { ThemeProvider } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

export const acterTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
})

export const ActerThemeProvider = ({ children }) => (
  <ThemeProvider theme={acterTheme}>{children}</ThemeProvider>
)
