import React from 'react';

function Wallet({ onConnect }) {
  const handleConnect = () => {
    // logic for connecting to wallet
    onConnect();
  };

  return (
    <div className="wallet">
      <h2>Connect Your Wallet</h2>
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
}

export default Wallet;
