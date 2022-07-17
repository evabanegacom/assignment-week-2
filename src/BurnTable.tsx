import React, { Fragment } from 'react';
import Table from './Table';
import { Typography } from '@mui/material';
import { css } from '@emotion/css';

interface Props {
    table: [];
  }

const BurnTable:React.FC<Props> = ({table}) => {
  return (
    <div className={accountInfo}>
      <Typography variant='h2'>Burn Table</Typography>
      <Table item={table} />
    </div>
  )
}

export default BurnTable;

const accountInfo = css`
  margin-top: 50px;
`
