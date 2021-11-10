import styled from 'styled-components'

let Footer = styled.div`
  padding: 10px 20px 15px;
  text-align: right;
  box-sizing: border-box;
`

export default function DialogFooter({ children }) {
  return <Footer>{children}</Footer>
}
