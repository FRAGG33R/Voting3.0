# **NFT Collection**

This is a simple smart contract for an NFT collection that allows the owner to mint new NFTs and transfer them to other addresses.

## **Features**

- The **`mint`** function allows the owner to mint a new NFT with a given name and IPFS hash, and assign it a unique ID.
- The **`transfer`** function allows the owner of an NFT to transfer it to another address.
- The **`getNft`** function allows anyone to view the metadata of a specific NFT, including its name, IPFS hash, and owner.
- The contract emits the **`action`** event when an NFT is minted, and the **`send`** event when an NFT is transferred.

## **Requirements**

- Solidity >= 0.4.16
- A compatible Ethereum blockchain (e.g., Ganache, Rinkeby, Mainnet)

## **Deployment**

To deploy the contract, you will need a compatible Ethereum wallet (e.g., MetaMask) and a tool such as Truffle or Remix.

1. Clone this repository and navigate to the project directory.
2. Install the required dependencies: **`npm install`**
3. Compile the contract: **`truffle compile`**
4. Connect to your Ethereum network and unlock your wallet.
5. Deploy the contract: **`truffle migrate --reset`**

## **Usage**

To use the contract, you will need to call its functions using an Ethereum wallet or a tool such as Remix.

### **Minting a new NFT**

To mint a new NFT, call the **`mint`** function with the following arguments:

- **`_name`**: the name of the NFT
- **`_ipfsHash`**: the IPFS hash of the NFT
- **`_id`**: the unique ID of the NFT

For example, in Remix:

```solidity
nftCollection.mint("My NFT", "Qmabcdefg", 1);
```

This will mint a new NFT with the given name, IPFS hash, and ID, and assign it to
