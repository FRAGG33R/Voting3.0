const nftCollection = artifacts.require('nftCollection');

contract('nftCollection', (accounts) => {
  let nft;
  const owner = accounts[0];
  const recipient = accounts[1];

  beforeEach(async () => {
    nft = await nftCollection.new(owner, { from: owner });
  });

  it('should return the correct NFT information', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });

    const [returnedName, returnedIpfsHash, returnedOwner] = await nft.getNft(id);
    assert.equal(returnedName, name);
    assert.equal(returnedIpfsHash, ipfsHash);
    assert.equal(returnedOwner, owner);
  });

  it('should return the correct NFT information after transfer', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });
    await nft.transfer(id, recipient, { from: owner });

    const [returnedName, returnedIpfsHash, returnedOwner] = await nft.getNft(id);
    assert.equal(returnedName, name);
    assert.equal(returnedIpfsHash, ipfsHash);
    assert.equal(returnedOwner, recipient);
  });

  it('should fail to get an NFT with an invalid id', async () => {
    const id = 1;

    try {
      await nft.getNft(id);
      assert.fail();
    } catch (error) {
      assert.include(error.message, 'Error: Returned error: VM Exception while processing transaction: revert');
    }
  });
});
