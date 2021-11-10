import styled from 'styled-components'
import layoutTheme from './../themes/layoutTheme'
import PropTypes from 'prop-types'

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'aside main'
    'footer footer';
  grid-template-rows: ${layoutTheme.headerHeight} 1fr ${layoutTheme.footerHeight};
  grid-template-columns: ${layoutTheme.asideWidth} 1fr;
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  grid-area: header;
  background-color: ${layoutTheme.red};
`

const Aside = styled.aside`
  grid-area: aside;
  background-color: ${layoutTheme.blue};
`

const Main = styled.main`
  grid-area: main;
  overflow-y: auto;
  background-color: ${layoutTheme.yellow};
`

const Footer = styled.footer`
  grid-area: footer;
  background-color: ${layoutTheme.green};
`

function GridLayout({ header, aside, main, footer }) {
  return (
    <Layout>
      <Header>{header}</Header>
      <Aside>{aside}</Aside>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Layout>
  )
}

GridLayout.propTypes = {
  header: PropTypes.node,
  aside: PropTypes.node,
  main: PropTypes.node,
  footer: PropTypes.node,
}

export default GridLayout
