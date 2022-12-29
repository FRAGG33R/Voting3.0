import Web3 from 'web3';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function buttonConnect() {
	const connect = async () =>
	{
		if (window.ethereum != 'undefined')
		{
			const web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
			const accounts = await web3.eth.getAccounts();
			const message : string = "Welcome to Voting !\n\nClick to sign in and accept the voting3.0 Terms\n\nAddress:\n" + accounts[0];
			const sign  = await web3.eth.personal.sign(message,  accounts[0], "");
			await web3.eth.personal.ecRecover(message, sign).then((res) => console.log(res));
		}
		else
			window.open('https://metamask.io/', '_blank');
	}
	return (
		<div>
			<button onClick={connect}>Connect MetaMask</button>
			<p id="address"></p>
		</div>
	);
}
