const nftCollection = artifacts.require("nftCollection");

contract("nftCollection", () => {
    it("should return the correct collection string", async () => {
        const contract = await nftCollection.deployed();
        const result = await contract.getCollection();
        assert.equal(result, "QmU8atXTgMio8UkEPXjJoqQAuu4FSqAoeiq9dun47tAy8c", "The returned collection string is incorrect");
    });
});
