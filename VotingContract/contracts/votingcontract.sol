pragma solidity >=0.5.0 <0.6.0;

contract NftVoting {
	event voteRegister(bytes32 indexed _nftHash, address indexed voter);

	mapping(bytes32 => uint) private nftVotesCount;
	mapping(address => uint) private voterCount;

	function vote(bytes32 _nftHash) public {
		require(_nftHash != 0x0, "invalid bytes32 value");
		require(voterCount[msg.sender] == 0, "voter has already voted");
		nftVotesCount[_nftHash]++;
		voterCount[msg.sender]++;
		emit voteRegister(_nftHash, msg.sender);
	}

	function getNumberVotes(bytes32 _nftHash) public view returns(uint) {
		return nftVotesCount[_nftHash];
	}

}
