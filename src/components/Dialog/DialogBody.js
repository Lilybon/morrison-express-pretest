import styled from 'styled-components'

const Body = styled.div`
  padding: 30px 20px;
  font-size: 14px;
`

export default function DialogBody({ children }) {
  return <Body>{children}</Body>
}
