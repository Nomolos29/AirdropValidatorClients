import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Airdrop", function () {
  async function deployOneYearLockFixture() {
    const owner: [string, string][] = [
      ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "100000000000000000000"],
      ["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", "1000000000000000000"],
      ["0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", "1000000000000000000"]
    ];

    const rootHash = "0x66f9be8ca2527522238ef529d439bb664251cd3045165fa486b1326b75ed5366";

    const tokenAddress = "";
    

    // Contracts are deployed using the first signer/account by default

    const Airdrop = await hre.ethers.getContractFactory("Airdrop");
    const airdrop = await Airdrop.deploy();

    return { owner };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { owner } = await loadFixture(deployOneYearLockFixture);

    });

    it("Should set the right owner", async function () {
      const { owner } = await loadFixture(deployOneYearLockFixture);

    });
  });
});
