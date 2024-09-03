# Airdrop Claiming Smart Contract Using Merkle Tree

This project demonstrates how to implement a Merkle tree-based airdrop in Solidity. A Merkle tree is used to store a whitelist of addresses along with the corresponding token amounts they can claim in an airdrop. The Merkle tree provides efficient proof generation and verification, allowing users to prove they are eligible for the airdrop without revealing the entire whitelist.



## The project includes:

A Solidity smart contract (MerkleAirdrop.sol) that verifies claims using a Merkle tree root and proofs.

Off-chain scripts merkle.js written in Node.js to generate the Merkle tree and Merkle proofs.

Instructions for deploying and testing the contract on Remix.

## Project Objectives

Only Whitelisted addresses can claim their tokens by providing a valid Merkle proof.

Uses OpenZeppelin's MerkleProof library for verification.

Supports custom token amounts for each whitelisted address.

## Prerequisites

Node.js (version 14 or later)

Remix  Environment for testing.

## Installation

1. Clone the Repository:

```
git clone git@github.com:Guzbyte-tech/MerkleTreeAirdropContract.git
```

2. Install Dependencies:

```
npm install
```
This will install the OpenZeppelin libraries and any required packages.


# Generate Merkle Tree and Proofs

The Node.js script generates a Merkle tree from a CSV file containing addresses and their corresponding token amounts. It then outputs the Merkle root and provides Merkle proofs for each address.

## Steps

1. Prepare the CSV File (airdrop.csv):

The CSV file should contain two columns: the user's Ethereum address and the token amount (wei preferred) they are eligible to claim.

Example airdrop.csv:
```
address,amount
0x1111111111111111111111111111111111111111,5000000000000000000
0x2222222222222222222222222222222222222222,2500000000000000000
```
2. Run the Script:

After adding the CSV file, generate the Merkle tree and Merkle root:
```
node merkle.js
```
This script has two functions **generateMerkleTree()** and **generateProof();**
## generateMerkleTree()

Generates the Merkle tree root hash from the list of addresses and amount from the Csv file. First run this function to get the root hash. This will generate a new file called **tree.json** which contains the Merkle tree and the proof for each address.

## generateProof()

This function generates the merkle proof for the address (user) this proof will be used to claim the reward.

When you run this merkle.js check check your terminal for the result of the root hash and merkle proof.

# Smart Contract

The project has two smart contract the `GTK.sol` this is ERC20 token running the airdrop and the `MerkleAirdrop.sol` Which is the contract that allows users claim their reward.

The smart contract, `MerkleAirdrop.sol`, allows users to claim their tokens by providing a valid Merkle proof.

## MerkleAirdrop.sol Overview 

Constructor: The contract is initialized with a Merkle root and the Deployed ERC20 token address in this case the **GTK.sol**.

`claimAirdrop()` : Users can claim their airdrop by submitting a valid Merkle proof along with their claim amount.

amount: The token amount the user is claiming.

merkleProof: The proof generated off-chain that proves their eligibility.

## Deployment on Remix

1. Go to Remix IDE.
2. Create the two smart contract files on remix and copy their respectives code in them.
3. Ensure you’re using Solidity 0.8.x or a compatible version.
4. Compile the contract.
5. Deploy the contract the `GTK.sol`
6. Deploy the `MerkleAirdrop.sol` by passing the Merkle root (generated off-chain) and the the deployed ERC20 token (GTK.sol) contract address to the constructor.
Testing the Airdrop

## Testing the Airdrop
Once the contract is deployed, test the `claimAirdrop()` function:

Call the claim function, passing:

`amount`: The amount eligible for the user.

`merkleProof`: The proof generated from the Node.js script. 

Merkle proof example
```
["0x81ddb8944bc5301d8d414f58ac4d74939d9608494a6e08b9dfb05cffc652900a","0xa8b1917ae6f19ba060838edf873a973f07e441530dadf027f0aa0d1026d05873","0x89b2c78d9f90a5ba1b0a1abd914ce4dc82ed99359ad86e2b50e64d0b9211ad36"]
```
Events
When the claim is successful, the contract will emit an event:

```
event Claimed(address indexed user, uint256 amount);
```

Resources

[OpenZeppelin MerkleProof Documentation](https://github.com/OpenZeppelin/merkle-tree)

## License

[MIT](https://choosealicense.com/licenses/mit/)