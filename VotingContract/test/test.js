const NftVoting = artifacts.require('NftVoting');

contract('NftVoting', (accounts) => {
  let contract;

  beforeEach(async () => {
    contract = await NftVoting.new();
  });

  it('should increment vote count for NFT', async () => {
    const nftHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
    await contract.vote(nftHash);
    const voteCount = await contract.getNumberVotes(nftHash);
    assert.equal(voteCount, 1, 'incorrect vote count');
  });

  it('should prevent a voter from voting more than once', async () => {
    const nftHash = '0x0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba';
    await contract.vote(nftHash);
    try {
      await contract.vote(nftHash);
      assert.fail('should have thrown error');
    } catch (error) {
      assert.ok(error.message.includes('revert'), 'incorrect error message');
    }
  });
});

