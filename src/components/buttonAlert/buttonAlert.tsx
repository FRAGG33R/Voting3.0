import './buttonAlert.css';
import Web3 from 'web3';
//including abi data type
export type AbiType = 'function' | 'constructor' | 'event' | 'fallback';
export type StateMutabilityType = 'pure' | 'view' | 'nonpayable' | 'payable';

export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: StateMutabilityType;
  type: AbiType;
  gas?: number;
}

export interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

export interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}

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


async function setup()
{
	try {
		const response = await contract.methods.vote("0x0").call();
		console.log(response);
	  } catch (error) {
		console.log(error);
	  }
	const balance = await web3.eth.getBalance("0x6aB5aAD9e0e15736af740Ef46CFB83954838772d");
	alert("my balance is " + web3.utils.fromWei(balance, "ether") + " ETH");
}

export default function buttonAlert() {
	return (
		<button onClick={setup}>CLICK ME</button>
	);
}
