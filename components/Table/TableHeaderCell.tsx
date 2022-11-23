import { styled } from '@mui/material';
import TableCell from '@mui/material/TableCell';

export const DefaultTableHeaderCell = styled(TableCell)(({ theme: { palette } }) => `
  background: ${palette.background.default};
  color: ${palette.text.primary};
`);
