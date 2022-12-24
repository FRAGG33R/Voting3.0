pragma solidity >=0.4.16 <0.9.0;

contract nftCollection
{
	string public		CollectionName = "eternel";
	address private		CollectionOwner;
	struct metadata {
		string name;
		string IpfsHash;
		address owner;
	}
	mapping(uint256 => metadata) private Collection;
	event action(uint256 _id, string _name, address _owner);
	event send(uint256 _id, string _name, address _oldOwner, address _newOwner);
	constructor(address _owner) public 
	{
		CollectionOwner = _owner;
	}
	function mint(string memory _name, string memory _ipfsHash, uint256 _id) public {
		require(msg.sender == CollectionOwner, "You must be the owner");
		require(Collection[_id].owner == address(0), "The Id already taken");
		Collection[_id] = metadata(_name, _ipfsHash, CollectionOwner);
		emit action(_id, _name, CollectionOwner);
	}

	function transfer(uint256 _id, address _to) public 
	{
		require(Collection[_id].owner != address(0), "The nft does not exist");
		require(msg.sender == Collection[_id].owner, "You must own the nft");
		emit send(_id, Collection[_id].name, Collection[_id].owner, _to);
		Collection[_id].owner = _to;
	}
	function getNft(uint256 _id) view public returns(string memory, string memory, address)
	{
		require(Collection[_id].owner != address(0), "The nft does not exist");
		return (Collection[_id].name, Collection[_id].IpfsHash, Collection[_id].owner);
	}
}