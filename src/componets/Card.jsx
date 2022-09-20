import { StyledCard, BgContainer, Container } from "./styles/Card.styled"
import data from '../data/data'

function Card(props) {
  let page
 switch (window.location.pathname) {
  case "/":
    page = "daily"
    break;
  case "/weekly":
    page = "weekly"
    break;
  case "/monthly": 
     page = "monthly"
     break;
 }
  return (
    <div>
     { data.map (test => (
       <StyledCard >
        <BgContainer bgColor={test.background.color} >
         <img src={test.background.image} alt="" />
       </BgContainer>
       <Container>
           <div>
         <h3>{test.title}</h3>
         <p>{page === "daily" ? test.timeframes.daily.current : page === "weekly" ? test.timeframes.weekly.current : test.timeframes.monthly.current}hrs</p>
           </div>
          <div>
           <img src="/images/icon-ellipsis.svg" alt="" />
           <p>Last Week - {page === "daily" ? test.timeframes.daily.previous : page === "weekly" ? test.timeframes.weekly.previous : test.timeframes.monthly.previous}hrs</p>
          </div>
        </Container>
       </StyledCard>
      ))}
    </div>
  )
}

export default Card