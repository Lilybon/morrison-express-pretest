import styled from 'styled-components'
import useCheckBoxes from './../hooks/useCheckBoxes'
import PropTypes from 'prop-types'

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
`

const TableHeaderRow = styled.tr`
  font-weight: bold;
  background-color: #a8c3ff;
`

const TableBodyRow = styled.tr`
  :nth-child(odd) {
    background-color: #edf1ff;
  }
  :nth-child(even) {
    background-color: #ffffff;
  }
`

function RTable({ columns, data }) {
  const {
    isAllSelected,
    isSelectionChecked,
    handleSelectAll,
    handleSelectSingle,
  } = useCheckBoxes(data)

  return (
    <Table>
      <thead>
        <TableHeaderRow>
          {columns.map((column, columnIndex) => (
            <th key={`th-${columnIndex}`} style={{ width: column.width }}>
              {column.type === 'checkbox' ? (
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={() => handleSelectAll()}
                />
              ) : (
                column.label
              )}
            </th>
          ))}
        </TableHeaderRow>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableBodyRow key={`tr-${rowIndex}`}>
            {columns.map((column, columnIndex) => (
              <td key={`td-${rowIndex}-${columnIndex}`}>
                {column.type === 'checkbox' && !row.disabled ? (
                  <input
                    type="checkbox"
                    value={row.value}
                    checked={isSelectionChecked(row)}
                    onChange={() => handleSelectSingle(row)}
                  />
                ) : typeof column.render === 'function' ? (
                  column.render(row)
                ) : (
                  row[column.prop]
                )}
              </td>
            ))}
          </TableBodyRow>
        ))}
      </tbody>
    </Table>
  )
}

RTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default RTable
