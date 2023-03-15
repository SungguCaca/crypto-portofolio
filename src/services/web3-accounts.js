import Web3 from "web3";

const initWeb3 = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      return new Web3(window.ethereum);
    } catch (error) {
      console.error(error);
      throw new Error("User denied account access");
    }
  } else if (window.web3) {
    return new Web3(window.web3.currentProvider);
  } else {
    throw new Error("No web3 provider detected");
  }
};

const getAccounts = async () => {
  const web3 = await initWeb3();
  try {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      throw new Error("No account found");
    }
    console.log("Accounts:", accounts);
    return accounts[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get account");
  }
};

const getNetwork = async () => {
  const web3 = await initWeb3();
  const network = await web3.eth.net.getNetworkType();
  return network;
};

const getSupportedNetworks = async () => {
  const web3 = await initWeb3();
  const networks = await web3.eth.net.getSupportedNetworks();
  return networks;
}

export { getAccounts, getNetwork, getSupportedNetworks };
