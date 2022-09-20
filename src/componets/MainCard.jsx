
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
            <CustomLink href="/">Daily</CustomLink>
            <CustomLink href="/weekly">Weekly</CustomLink>
            <CustomLink href="/monthly">Monthly</CustomLink>
          </ul>
         </Nav>
    </StyledMainCard>
  )
}

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
        </a>
       </li>
  )
}

export default MainCard