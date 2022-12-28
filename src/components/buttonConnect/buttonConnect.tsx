import './buttonConnect.css';
import Web3 from 'web3';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

var karim:string;
//this code to check if metamask is installed on the browser or not
declare let web3: any;
if (typeof web3 !== 'undefined')
{
	alert("meta mask is installed")
	const wallet = new Web3(web3.currentProvider);
}
else
	alert("u need to install metamask")
async function connect()
{

	const web3 = new Web3(window.ethereum);
	await window.ethereum.enable();
	const accounts = await web3.eth.getAccounts();
	const balance = await web3.eth.getBalance(accounts[0]);
	karim = balance;
	/*const root = ReactDOM.createRoot(document.getElementById('root'));
	const element = <h1>Hello, world</h1>;
	root.render(element);*/
	console.log("connected wallet's address: " + accounts[0] + ", it's balance is: " + balance);
}

export default function buttonConnect() {
	return (
		<div>
			<button onClick={connect}>Connect MetaMask</button>
			<p id="address"></p>
		</div>
	);
}
