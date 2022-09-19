
import { StyledMainCard, Nav, Hero } from './styles/MainCard.styled'

function MainCard() {
  return (
    <StyledMainCard>
      <Hero>
         <div>
         <p>Report for</p>
         <h1>Jeremy Robson</h1>
         </div>
         <img src="/images/image-jeremy.png" alt="jeremy" />
      </Hero>
     
         <Nav>
          <ul>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
         </Nav>
    </StyledMainCard>
  )
}

export default MainCard