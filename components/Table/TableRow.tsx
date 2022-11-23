import { alpha, styled, TableCellProps } from '@mui/material';
import MuiTableRow from '@mui/material/TableRow';
import { CoreTableProps } from '.';
import { DefaultTableCell } from './TableCell';
import { get } from 'lodash';

export const DefaultTableRow = styled(MuiTableRow)(({ theme: { palette } }) => `
  &:hover {
    td {
      background: rgba(44, 44, 44, 0.5);
    }
  }
`);

interface PropTypes<T = any> extends CoreTableProps<T> {
  rowKey: string;
  row: any;
  rowIndex: number,
}

const Row = <T extends any>({
  config,
  rowKey,
  row,
  components = {},
}: PropTypes<T>) => {

  const {
    TableRow = DefaultTableRow,
    TableCell = DefaultTableCell,
  } = components;

  return (
    <TableRow role="row" key={get(row, rowKey)}>
      {config.map(({ key, align, transformValue, render }) => {
        const data = get(row, key, '');
        const value = transformValue?.(data) || data;
        return (
          <TableCell key={key} align={align as TableCellProps['align']}>
            {render ? render(value, row) : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
