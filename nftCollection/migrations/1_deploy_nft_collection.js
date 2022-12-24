const NftCollection = artifacts.require("nftCollection");

module.exports = function(deployer) {
  deployer.deploy(NftCollection, "0x704Dd54f36A740327cfA0AddC9177479d2Bc092a").then(function() {
    console.log("NftCollection deployed at", NftCollection.address);
  }).catch(function(error) {
    console.error(error);
  });
};