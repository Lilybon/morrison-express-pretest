import styled from 'styled-components'
import PropTypes from 'prop-types'

let Footer = styled.div`
  padding: 10px 20px 15px;
  text-align: right;
  box-sizing: border-box;
`

function DialogFooter({ children }) {
  return <Footer>{children}</Footer>
}

DialogFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DialogFooter
