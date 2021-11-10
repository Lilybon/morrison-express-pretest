import styled from 'styled-components'
import PropTypes from 'prop-types'

const Body = styled.div`
  padding: 30px 20px;
  font-size: 14px;
`

function DialogBody({ children }) {
  return <Body>{children}</Body>
}

DialogBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DialogBody
