pragma solidity >=0.5.0 <0.6.0;

contract NftVoting {
	
	mapping(address => uint) nftVotesCount;
	mapping(address => uint) voterCount;

	function vote(address memory _nftHash) {
		assert(voterCount[msg.sender] == 0, "Voter already voted");
		nftVotesCount[_nftHash]++;
		voterCount[msg.sender]++;
	}

	function getNumberVotes(address memory _nftHash) view returns(uint) {
		return nftVotesCount[_nftHash];
	}
}