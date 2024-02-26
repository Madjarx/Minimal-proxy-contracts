require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('hardhat-gas-reporter');

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: '0.5.16', settings },
      { version: '0.6.12', settings },
      { version: '0.7.6',  settings },
    ],
  },
  gasReporter: {
    enable: true,
    currency: 'USD',
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545" 
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VWjZBkJC2Y9wAweWNtZAqoZTtPEBLyDB",
      accounts: ["<0x_private_key>"]
    }
  }
};
