const NftCollection = artifacts.require("nftCollection");
const truffleAssert = require("truffle-assertions");

contract("nftCollection", accounts => {
  let nftCollection;

  before(async () => {
    nftCollection = await NftCollection.deployed();
  });

  it("should return the correct collection", async () => {
    const collection = await nftCollection.getCollection();
    assert.equal(collection.length, 12, "Incorrect number of items in the collection");
    assert.equal(collection[0], "QmVUMezmjvy5yZawz4PkxxzdN3iquoYDA7UtcRTmpHCTxj", "Incorrect item in collection");
  });
});
