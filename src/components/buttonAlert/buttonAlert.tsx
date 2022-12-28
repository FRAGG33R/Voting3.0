import './buttonAlert.css';
import {contract, web3 } from "../c_voting_info";

async function setup()
{
	try {
		const response = await contract.methods.vote("0x0").call();
		console.log(response);
	} catch (error) {
		console.log(error);
	}
	contract.getPastEvents('voteRegister', {
		fromBlock: 'latest',
		toBlock: 'latest'
	  }, (error, events) => {
		console.log("heere");
		console.log(events[0].returnValues._nftHash);
	  });
	  
	const balance = await web3.eth.getBalance("0x6aB5aAD9e0e15736af740Ef46CFB83954838772d");
	alert("my balance is " + web3.utils.fromWei(balance, "ether") + " ETH");
}

export default function buttonAlert() {
	return (
		<button onClick={setup}>smart contract</button>
	);
}
