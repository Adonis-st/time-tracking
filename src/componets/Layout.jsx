import MainCard from "./MainCard"
import Card from "./Card"
import { Wrapper } from "./styles/Layout.styled"

function Layout() {
  return (
    <Wrapper>
      <div className="main-card">
    <MainCard />
      </div>
      <div className="cards">
    <Card />
      </div>
    </Wrapper>
  )
}

export default Layout