import React, { useState, useEffect } from "react";
import { getPortfolioData } from "../services/covalent";
import { getNetwork, getAccounts } from "../services/web3-accounts";
import Footer from './Footer';
import "../styles/portfolio.scss";

function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [error, setError] = useState(null);
  const [network, setNetwork] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [tab, setTab] = useState("tokens");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPortfolioData();
        //console.log(data); // log the value of data
        setPortfolioData(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch portfolio data.");
      }
    }    

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchNetwork() {
      try {
        const networkName = await getNetwork();
        setNetwork(networkName);
      } catch (error) {
        console.error(error);
        setNetwork("");
      }
    }

    fetchNetwork();
  }, []);

  useEffect(() => {
    async function fetchAccounts() {
      try {
        const accountsList = await getAccounts();
        setAccounts(accountsList);
        console.log(accounts)
      } catch (error) {
        console.error(error);
        setAccounts([]);
      }
    }

    fetchAccounts();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const columns =
    tab === "tokens" ? (
      <>
        <th>Tokens</th>
        <th>Portfolio %</th>
        <th>Price</th>
        <th>Balance</th>
      </>
    ) : (
      <>
        <th>Name</th>
      </>
    );


  return (
    <div className="portfolio">
      <div className="title">
        <h2>Portfolio</h2>
        <div className="network-info">
          {network && <span className="network">{network}</span>}
        </div>

       <div className="accounts-info">
        {accounts.length > 0 && (
          <span className="account">{`${accounts.substring(0, 6)}...${accounts.substring(accounts.length-6)}`}</span>
        )}
      </div>    
    </div>
     

      <div className="portfolio-value">
        <div className="label-net">Net Worth</div>
        <div className="value-net">
          $
          {portfolioData
            .reduce((total, asset) => total + asset.quote, 0)
            .toFixed(2)}
        </div>
      </div>
      
      <div className="tab">
        <h3>Assets</h3>
        <div className="tabs">
          <button
            className={tab === "tokens" ? "active" : ""}
            onClick={() => setTab("tokens")}
          >
            Tokens
          </button>
          <button
            className={tab === "nfts" ? "active" : ""}
            onClick={() => setTab("nfts")}
          >
            NFTs
          </button>
        </div>
        {tab === "tokens" && (
          <table>
            <thead>
              <tr>{columns}</tr>
            </thead>
            <tbody>
              {Array.isArray(portfolioData) &&
                portfolioData.map((asset) => (
                  <tr key={asset.contract_address}>
                    <td>{asset.contract_name}</td>
                    <td>{asset.portfolio_percentage}%</td>
                    <td>${asset.quote_rate}</td>
                    <td>{asset.balance}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {tab === "nfts" && (
          <div className="nfts">
            <img src="../images/profil.jpg" alt="My NFT Collection"/>
            <span className="name">Teykan Tribe</span>
            <p>Teykan #16</p>
          </div>        
        )}
      </div>

      <Footer />
    </div>  
  );
}

export default Portfolio;
