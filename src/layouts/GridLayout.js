import styled from 'styled-components'
import layoutTheme from './../themes/layoutTheme'

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

export default function GridLayout() {
  return (
    <Layout>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Layout>
  )
}
