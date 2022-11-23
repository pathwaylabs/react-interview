import React from 'react';
import Table from './Table';
import { DefaultTableContainer } from './TableContainer';
import { DefaultTableHeaderRow } from './TableHeaderRow';
import { DefaultTableHeaderCell } from './TableHeaderCell';
import { DefaultTableRow } from './TableRow';
import { DefaultTableCell } from './TableCell';
import { TableProps } from '@mui/material';

export interface ColConfig<T = any> {
  key: string;
  label: string;
  width?: number;
  align?: TableProps['align'];
  transformValue?: (value: any) => void;
  render?: (value: any, record: T) => React.ReactNode;
}

export interface CoreTableProps<T = any> {
  config: ColConfig<T>[];

  components?: {
    TableContainer?: React.FC;
    Table?: React.FC;
    TableHeaderRow?: React.FC;
    TableHeaderCell?: React.FC;
    TableRow?: React.FC;
    TableCell?: React.FC;
  }
}

export {
  DefaultTableContainer,
  DefaultTableHeaderRow,
  DefaultTableHeaderCell,
  DefaultTableRow,
  DefaultTableCell,
};

export default Table;
