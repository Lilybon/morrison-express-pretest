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

export default function RTable({ columns, data }) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => (
            <th key={`th-${columnIndex}`} style={{ width: column.width }}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`tr-${rowIndex}`}>
            {columns.map((column, columnIndex) => (
              <td key={`td-${rowIndex}-${columnIndex}`}>
                {typeof column.render === 'function'
                  ? column.render(row)
                  : row[column.prop]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
