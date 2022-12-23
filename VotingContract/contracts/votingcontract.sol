pragma solidity >=0.5.0 <0.6.0;

contract NftVoting {

	mapping(bytes32 => uint) nftVotesCount;
	mapping(address => uint) voterCount;

	function vote(bytes32 _nftHash) public {
		require(voterCount[msg.sender] == 0);
		nftVotesCount[_nftHash]++;
		voterCount[msg.sender]++;
	}

	function getNumberVotes(bytes32 _nftHash) public view returns(uint) {
		return nftVotesCount[_nftHash];
	}

}
