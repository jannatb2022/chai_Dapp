require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */

const goerli_url = process.env.goerli_url;
const private_key = process.env.private_key;

module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: goerli_url,
      accounts: [private_key],
    }
  }
};
