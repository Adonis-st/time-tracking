import { ThemeProvider } from 'styled-components'
import GlobalStyles from './componets/styles/Global'
import Layout from './componets/Layout'


function App() {
 
const theme = {
  borderRadius: '15px',
  color: {
    primary: '#fff',
    secondary: '#BBC0FF'
  }
}

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App
