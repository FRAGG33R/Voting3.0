const MyContract = artifacts.require("NftVoting");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};