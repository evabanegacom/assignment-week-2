import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import MintTable from './MintTable';
import BurnTable from './BurnTable';

import './App.css';

function App() {
  const [mints, setMints ] = useState<any>([]);
  const [burns, setBurns ] = useState<any>([]);
  let provider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/TmZStpJR5M1MgSupnAyPBGYUDAadhaeo', 1)
  const address = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
  const ABI:any = ["event Mint(address indexed to, uint256 amount);",
  "event Burn(address indexed burner, uint256 value);"]
  const contract = new ethers.Contract(address, ABI, provider)
  const mint:any = 'Mint'
  const burn:any = 'Burn'
  const getContracts = async () => {
    const mintTransaction:any = await contract.queryFilter( mint, 6766284, 'latest')
    setMints(mintTransaction)
    const burnTransaction = await contract.queryFilter( burn, 6766284, 'latest')
    setBurns(burnTransaction)
  }
  useEffect(() =>{
    getContracts()
  }, [] )
  return(
    <div className="App">
      <MintTable table={mints} />
      <BurnTable table={burns} />
    </div>
  );
}

export default App;


