import React, { useState, useEffect } from 'react';
import Wallet from './components/Wallet';
import Portfolio from './components/Portfolio';
import covalentService, { getPortfolioData } from './services/covalent';

function App() {
  const [connected, setConnected] = useState(false);
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getPortfolioData();
        setPortfolioData(data);
      } catch (error) {
        setErrorMessage('Failed to fetch portfolio data');
      }
      setLoading(false);
    };

    if (connected) {
      fetchData();
    }
  }, [connected]);

  const handleConnect = () => {
    setConnected(true);
  };

  return (
    <div className="app">
      {!connected && <Wallet onConnect={handleConnect} />}
      {connected && loading && <div>Loading...</div>}
      {connected && portfolioData && (
        <Portfolio portfolioData={portfolioData} />
      )}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default App;
