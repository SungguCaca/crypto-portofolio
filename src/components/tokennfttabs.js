import React, { useState } from 'react';

const TokenTable = () => {
  // State untuk data token
  const [tokens, setTokens] = useState([
    { id: 1, name: "Token 1", symbol: "TKN1", balance: "100" },
    { id: 2, name: "Token 2", symbol: "TKN2", balance: "50" },
    { id: 3, name: "Token 3", symbol: "TKN3", balance: "200" }
  ]);

  return (
    <div>
      {tokens.map((token) => (
        <div key={token.id}>
          <h3>{token.name}</h3>
          <p>{token.symbol}</p>
          <p>{token.balance}</p>
        </div>
      ))}
    </div>
  );
};

const TokenNFTTabs = () => {
  // State untuk menentukan tab mana yang aktif
  const [activeTab, setActiveTab] = useState("tokens");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleClick("tokens")}>Tokens</button>
        <button onClick={() => handleClick("nfts")}>NFTs</button>
      </div>
      <div>
        {activeTab === "tokens" ? <TokenTable /> : <NFTList />}
      </div>
    </div>
  );
};

export default TokenNFTTabs;
