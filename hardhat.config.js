
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/b6528fcccdf441639fc77a8f69bc3c2",
      accounts: ["0x572c3ca09ab4693845c29c2cdfbf738ed30619d5030eb50f1e3ed9500c273f86"],
    },
  },
};
