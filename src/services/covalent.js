import axios from "axios";

const API_KEY = "ckey_5daa4fd7ef054c3f84b8a4fe759";
const API_URL = "https://api.covalenthq.com/v1";

export const getPortfolioData = async (address) => {
  try {
    const response = await axios.get(
      `${API_URL}/1/address/0xe7ed009a30032b9e1b63e291a92c81a37a677583/balances_v2/?key=${API_KEY}`
    );
    return response.data.data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getChainData = async (chainId) => {
  try {
    const response = await axios.get(
      `${API_URL}/${chainId}/`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const getTokenData = async (chainId, contractAddress) => {
  try {
    const response = await axios.get(
      `${API_URL}/${chainId}/tokens/${contractAddress}/`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
