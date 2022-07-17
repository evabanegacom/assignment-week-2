import React from 'react';
import Table from './Table';
import { Typography } from '@mui/material';

interface Props {
  table: []
}

const MintTable:React.FC<Props> = ({table}) => {
  return (
    <>
      <Typography variant='h2'>Mint Table</Typography>
      <Table item={table} />
    </>
  )
}

export default MintTable