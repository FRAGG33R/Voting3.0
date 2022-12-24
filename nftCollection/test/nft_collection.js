const nftCollection = artifacts.require('nftCollection');

contract('nftCollection', (accounts) => {
  let nft;
  const owner = accounts[0];
  const recipient = accounts[1];

  beforeEach(async () => {
    nft = await nftCollection.new({ from: owner });
  });

  it('should mint a new NFT', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });

    const result = await nft.Collection(id);
    assert.equal(result.name, name);
    assert.equal(result.IpfsHash, ipfsHash);
    assert.equal(result.owner, owner);
  });

  it('should transfer an NFT', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });

    await nft.transfer(id, recipient, { from: owner });

    const result = await nft.Collection(id);
    assert.equal(result.owner, recipient);
  });

  it('should fail to mint an NFT with a taken id', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });

    try {
      await nft.mint(name, ipfsHash, owner, id, { from: owner });
      assert.fail();
    } catch (error) {
      assert.include(error.message, 'The Id already taken');
    }
  });

  it('should fail to transfer an NFT that the sender does not own', async () => {
    const id = 1;
    const name = 'My NFT';
    const ipfsHash = 'Qm123';

    await nft.mint(name, ipfsHash, owner, id, { from: owner });

    try {
      await nft.transfer(id, recipient, { from: recipient });
      assert.fail();
    } catch (error) {
      assert.include(error.message, 'You must own the nft');
    }
  });
});
