import React, { useCallback } from 'react';
import { Box, Checkbox, styled, TableCellProps, Tooltip } from '@mui/material';
import MuiTableRow from '@mui/material/TableRow';
import { DefaultTableHeaderCell } from './TableHeaderCell';
import { CoreTableProps } from '.';

export const DefaultTableHeaderRow = styled(MuiTableRow)``;

interface PropTypes<T = any> extends CoreTableProps<T> {
  unSortable?: string[];
  nowrap?: boolean;
}

const HeaderRow = <T extends {}>({
  config,
  unSortable = [],
  components = {},
  nowrap,
}: PropTypes<T>) => {

  const {
    TableHeaderRow = DefaultTableHeaderRow,
    TableHeaderCell = DefaultTableHeaderCell,
  } = components;

  return (
    <TableHeaderRow>
      {config.map((col) => {
        return (
          <TableHeaderCell
            key={String(col.key)}
            width={col.width}
            align={col.align}
          >
            <Box className="flex-row items-center" sx={{
              position: 'relative',
              justifyContent: col.align,
            }}>
              <Box sx={{ position: 'relative' }}>
                {col.label}
              </Box>
            </Box>
          </TableHeaderCell>
        );
      })}
    </TableHeaderRow>
  );
};

export default HeaderRow;
