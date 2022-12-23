This Solidity contract defines a contract called **`NftVoting`** that allows users to vote for a specified NFT by calling the **`vote()`** function. The contract maintains two mappings:

1. **`nftVotesCount`**, which is a mapping from a bytes32 value (representing the hash of an NFT) to a uint (representing the number of votes received for that NFT).
2. **`voterCount`**, which is a mapping from an address (representing the Ethereum address of a voter) to a uint (representing the number of votes that the voter has cast).

The **`vote()`** function has the following logic:

1. It uses a **`require`** statement to check if the voter has already voted by checking the value in the **`voterCount`** mapping for the voter's Ethereum address. If the voter has already voted, the **`require`** statement will trigger and the execution of the contract will be halted.
2. If the **`require`** statement does not trigger, the function increments the value in the **`nftVotesCount`** mapping for the specified NFT by 1.
3. The function increments the value in the **`voterCount`** mapping for the voter's Ethereum address by 1.

The **`getNumberVotes()`** function is a view function that returns the number of votes received for a specified NFT by looking up the value in the **`nftVotesCount`** mapping for the NFT's hash.
