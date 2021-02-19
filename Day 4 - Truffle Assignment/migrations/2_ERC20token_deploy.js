const tokenERC20 = artifacts.require("ERC20");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(tokenERC20, "MarksTestToken", "MTT").then(function(instance){
    instance.mint(accounts[0], 100).then(function(){
        console.log("Success: Deployed and minted 100 tokens!")
    }).catch(function(err){
        console.log("Error minting tokens: " + err)
    });
  }).catch(function(err){
    console.log("Error deploy failed: " + err);
  });
};
