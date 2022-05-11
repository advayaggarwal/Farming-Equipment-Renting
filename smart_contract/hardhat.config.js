require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/dETYLt1KwZaNht5opCasaODnivgbJzDo",
      accounts: [
        "65182537cd56dac5a844e1d8976ec0d203bbf02c5e3a1aa2831a4e877c593e8f",
      ],
    },
  },
};
