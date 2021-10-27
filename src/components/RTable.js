import styled from 'styled-components'

const borderColor = '#9f9f9f'

const Table = styled.table`
  border: 1px solid ${borderColor};
  th,
  td {
    margin: 0;
    padding: 4px 8px;
    border-bottom: 1px solid ${borderColor};
    border-right: 1px solid ${borderColor};
    text-align: left;

    :last-child {
      border-right: 0;
    }
  }
  thead tr {
    font-weight: bold;
    background-color: #a8c3ff;
  }
  tbody tr {
    :nth-child(odd) {
      background-color: #edf1ff;
    }
    :nth-child(even) {
      background-color: #ffffff;
    }
  }
`
// TODO: try using config props to generate template and custom column cell
export default function RTable({ head, body }) {
  return (
    <Table>
      <thead>{head}</thead>
      <tbody>{body}</tbody>
    </Table>
  )
}
