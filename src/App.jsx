import { ThemeProvider } from 'styled-components'
import MainCard from './componets/MainCard'
import GlobalStyles from './componets/styles/Global'
import Card from './componets/Card'


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
      <MainCard />
      <Card/>
    </ThemeProvider>
  )
}

export default App
