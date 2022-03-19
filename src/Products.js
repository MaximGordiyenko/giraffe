import { useMemo } from "react";
import { useTable } from 'react-table';

export const Products = ({ products }) => {
  
  const productsData = products?.map(el => {
    return {
      col1: el.id,
      col2: el.title,
      col3: el.price,
      col4: el.count,
    };
  });
  const data = useMemo(() => productsData.flat(), []);
  
  const columns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'col1',
      },
      {
        Header: 'title',
        accessor: 'col2',
      },
      {
        Header: 'price',
        accessor: 'col3',
      },
      {
        Header: 'count',
        accessor: 'col4',
      },
    ],
    []
  );
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  
  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              {...column.getHeaderProps()}
              style={{
                borderBottom: 'solid 3px red',
                background: 'aliceblue',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '10px',
                    border: 'solid 1px gray',
                    background: 'papayawhip',
                  }}
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
};