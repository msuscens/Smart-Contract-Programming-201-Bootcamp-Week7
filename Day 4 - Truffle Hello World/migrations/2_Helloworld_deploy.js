const Helloworld = artifacts.require("Helloworld");

module.exports = function(deployer, network, accounts) {

    deployer.deploy(Helloworld).then(function(instance){
        instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){
            console.log("Success");
        }).catch(function(err){
            console.log("Error: " + err)
        });
    }).catch(function(err){
        console.log("Deploy failed: " + err);
    });
};

// Previous Payable functions example, without error handling but showing async/await nesting
//   deployer.deploy(Helloworld).then(function(instance){
//       instance.setMessage("Hello Again!", {value: 1000000, from: accounts[0]}).then(function(){
//           instance.getMessage().then(function(message){
//               console.log("Current message: " + message);
//           });
//       });
//   });
//};