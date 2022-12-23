const NftVoting = artifacts.require("NftVoting");

contract("NftVoting", accounts => {
  it("should allow voting for a valid NFT", async () => {
    const contract = await NftVoting.new();
    const nftHash = "0xabcdef0123456789abcdef0123456789";

    await contract.vote(nftHash);

    const votes = await contract.getNumberVotes(nftHash);
    assert.equal(votes, 1, "The NFT should have 1 vote");
  });

  it("should not allow voting for an empty NFT hash", async () => {
    const contract = await NftVoting.new();
    const nftHash = "0x0000000000000000000000000000000000000000";

    try {
      await contract.vote(nftHash);
      assert.fail("The vote should have thrown an error");
    } catch (error) {
      assert.include(error.message, "invalid bytes32 value", "The error message should mention an invalid bytes32 value");
    }
  });

  it("should not allow a voter to vote multiple times", async () => {
    const contract = await NftVoting.new();
    const nftHash = "0xabcdef0123456789abcdef0123456789";

    await contract.vote(nftHash);

    try {
      await contract.vote(nftHash);
      assert.fail("The vote should have thrown an error");
    } catch (error) {
      assert.include(error.message, "voter has already voted", "The error message should mention that the voter has already voted");
    }
  });
});
