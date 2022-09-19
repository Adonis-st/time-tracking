
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MainCard from './componets/MainCard'
import GlobalStyles from './componets/styles/Global'
import Card from './componets/Card'
import data from './data/data.json'


function App() {
 
const theme = {
  borderRadius: '15px',
  color: {
    primary: '#fff',
    secondary: '#BBC0FF'
  }
}


  const [cardData, setCardData] = useState(data)
  

  // setCardData(prevState => {
  //   return {...prevState,
  //         ...bgColors
  //   }
  // })

 const cards = cardData.map( item => (
  <Card 
  title={item.title} 
  current= {item.timeframes.weekly.current}
  previous ={item.timeframes.weekly.previous}
  bgColor={item.background.color}
  bgImg={item.background.image}
  
  />
 ))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainCard />
      {cards}
    </ThemeProvider>
  )
}

export default App
