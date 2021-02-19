const tokenERC20 = artifacts.require("ERC20");

contract("ERC20", accounts => {
    it("should mint 100 tokens into the first account", () =>
        tokenERC20.deployed()
            // why .call(accounts[0]) ?
            .then (instance => instance.balanceOf.call(accounts[0]))
            .then (balance => {
                //why valueOf() ?
                assert.equal(balance.valueOf(), 100, "Error: There isn't 100 tokens in the first account");
            })
    );
});

/*
contract("ERC20", accounts => {
    it("should mint 100 tokens into the first account", async () => {
        let instance = await tokenERC20.deployed();
        let balance = await instance.balanceOf.call(accounts[0]);
        assert.equal(balance.valueOf(), 100, "Error: There isn't 100 tokens in the first account");
    });
*/