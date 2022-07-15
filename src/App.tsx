import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { ethers } from 'ethers';

import './App.css';

async function App() {
  let provider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/TmZStpJR5M1MgSupnAyPBGYUDAadhaeo', 1)
  const address = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
  const ABI:any = ["event Mint(address indexed to, uint256 amount);",
  "event Burn(address indexed burner, uint256 value);"]
  const contract = new ethers.Contract(address, ABI, provider)

  const mintTransaction = await contract.queryFilter( 'Mint', 6766284, 'latest')
  console.log(mintTransaction)
  useEffect(() =>{
    console.log(contract)

  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
