pragma solidity >=0.4.16 <0.9.0;

contract nftCollection {

	string __collection = "QmU8atXTgMio8UkEPXjJoqQAuu4FSqAoeiq9dun47tAy8c";

	function getCollection() view public returns(string memory)
	{
		return(__collection);
	}
}