import { StyledCard, BgContainer, Container } from "./styles/Card.styled"

function Card(props) {

  return (
    <StyledCard>
      <BgContainer bgColor={props.bgColor} >
        <img src={props.bgImg} alt="" />
      </BgContainer>
      <Container>
        <div>
        <h3>{props.title}</h3>
        <p>{props.current}hrs</p>
        </div>
        <div>
          <img src="/images/icon-ellipsis.svg" alt="" />
          <p>Last Week - {props.previous}hrs</p>
        </div>
      </Container>
    </StyledCard>
  )
}

export default Card