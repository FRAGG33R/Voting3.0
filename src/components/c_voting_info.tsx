import Web3 from 'web3';
import { AbiItem } from './Utils';

const web3 = new Web3('https://goerli.infura.io/v3/30927c38dcee44098e9e4a69315c4832');
const contractAddress = "0xD2Fdb07Cbb24F631E7c444383C3b1007Cf667184";
const contractAbi : AbiItem[] = [
	{
	"anonymous": false,
	"inputs": [
		{
		"indexed": true,
		"name": "_nftHash",
		"type": "bytes32"
		},
		{
		"indexed": true,
		"name": "voter",
		"type": "address"
		}
	],
	"name": "voteRegister",
	"type": "event"
	},
	{
	"constant": false,
	"inputs": [
		{
		"name": "_nftHash",
		"type": "bytes32"
		}
	],
	"name": "vote",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
	},
	{
	"constant": true,
	"inputs": [
		{
		"name": "_nftHash",
		"type": "bytes32"
		}
	],
	"name": "getNumberVotes",
	"outputs": [
		{
		"name": "",
		"type": "uint256"
		}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
	}
];

const contract = new web3.eth.Contract(contractAbi, contractAddress);

export {contract, contractAbi, contractAddress, web3}