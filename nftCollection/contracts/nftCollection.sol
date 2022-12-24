pragma solidity >=0.4.16 <0.9.0;


contract nftCollection
{
	string public		CollectionName = "eternel";
	address public		CollectionOwner =  0x704Dd54f36A740327cfA0AddC9177479d2Bc092a;
	struct metadata {
		string name;
		string IpfsHash;
		address owner;
	}
	mapping(uint256 => metadata) Collection;
	event action(uint256 _id, string _name, address _owner);
	event send(uint256 _id, string _name, address _oldOwner, address _newOwner);

	function mint(string memory _name, string memory _ipfsHash, address _owner, uint256 _id) public {
		require(msg.sender == _owner, "You must be the owner");
		require(Collection[_id].owner == address(0), "The Id already taken");

		Collection[_id] = metadata(_name, _ipfsHash, _owner);
		emit action(_id, _name, _owner);
	}

	function transfer(uint256 _id, address _to) public 
	{
		require(msg.sender == Collection[_id].owner, "You must own the nft");
		emit send(_id, Collection[_id].name, Collection[_id].owner, _to);
		Collection[_id].owner = _to;
	}
}