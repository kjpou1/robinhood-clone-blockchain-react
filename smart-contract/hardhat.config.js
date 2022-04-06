require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})

const ALCHEMY_API_URL = process.env.ALCHEMY_API_URL
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_URL,
      accounts: [WALLET_PRIVATE_KEY]
    }
  }
};
