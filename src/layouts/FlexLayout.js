import styled from 'styled-components'
import layoutTheme from './../themes/layoutTheme'

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Header = styled.header`
  width: 100%;
  height: ${layoutTheme.headerHeight};
  background-color: ${layoutTheme.red};
`

const Aside = styled.aside`
  width: ${layoutTheme.asideWidth};
  height: calc(100vh - 60px);
  background-color: ${layoutTheme.blue};
`

const Main = styled.main`
  width: calc(100vw - ${layoutTheme.asideWidth});
  height: calc(100vh - ${layoutTheme.headerHeight} - ${layoutTheme.footerHeight});
  overflow-y: auto;
  background-color: ${layoutTheme.yellow};
`

const Footer = styled.footer`
  width: 100%;
  height: ${layoutTheme.footerHeight};
  background-color: ${layoutTheme.green};
`

export default function GridLayout () {
  return (
    <Layout>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Layout>
  )
}