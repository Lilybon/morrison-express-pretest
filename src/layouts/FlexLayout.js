import styled from 'styled-components'
import layoutTheme from './../themes/layoutTheme'
import PropTypes from 'prop-types'

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
  height: calc(
    100vh - ${layoutTheme.headerHeight} - ${layoutTheme.footerHeight}
  );
  overflow-y: auto;
  background-color: ${layoutTheme.yellow};
`

const Footer = styled.footer`
  width: 100%;
  height: ${layoutTheme.footerHeight};
  background-color: ${layoutTheme.green};
`

function FlexLayout({ header, aside, main, footer }) {
  return (
    <Layout>
      <Header>{header}</Header>
      <Aside>{aside}</Aside>
      <Main>{main}</Main>
      <Footer>{footer}</Footer>
    </Layout>
  )
}

FlexLayout.propTypes = {
  header: PropTypes.node,
  aside: PropTypes.node,
  main: PropTypes.node,
  footer: PropTypes.node,
}

export default FlexLayout
