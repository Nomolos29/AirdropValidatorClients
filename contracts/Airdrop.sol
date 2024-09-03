// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Airdrop {
    IERC20 public token;

    bytes32 public merkleRoot;

    mapping(address => bool) public hasClaimed;

    event AirdropClaimed(address indexed claimant, uint256 amount);

    constructor(address _token, bytes32 _merkleRoot) {
        token = IERC20(_token);
        merkleRoot = _merkleRoot;
    }

    function claimAirdrop(
        uint256 amount,
        bytes32[] calldata merkleProof
    ) external {
        require(!hasClaimed[msg.sender], "Airdrop already claimed.");
        // bytes32 leaf = keccak256(abi.encodePacked(msg.sender, amount));
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(msg.sender, amount))));

        require(
            MerkleProof.verify(merkleProof, merkleRoot, leaf),
            "Invalid Merkle proof."
        );

        hasClaimed[msg.sender] = true;

        require(token.transfer(msg.sender, amount), "Token transfer failed.");

        emit AirdropClaimed(msg.sender, amount);
    }
}
