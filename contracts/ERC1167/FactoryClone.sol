// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC20PresetFixedSupplyUpgradeable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract FactoryClone {
    address immutable tokenImplementation;

    constructor() public {
        // tokenImplementation = address(new ERC20PresetFixedSupplyUpgradeable());
        /**
         * The address should be baked in but for testing purposes we shall asing it via constructor.
         * Given address is one of sepolia contracts deployed while developing.
         * 
         * Ref. to ./FactoryCloneTest.sol in the same dir for testing
         */
        tokenImplementation = 0xcDcD8191934b5FDeA02b2502E892582831592730;
    }

    function createToken(string calldata name, string calldata symbol, uint256 initialSupply) external returns (address) {
        address clone = Clones.clone(tokenImplementation);
        ERC20PresetFixedSupplyUpgradeable(clone).initialize(name, symbol, initialSupply, msg.sender);
        return clone;
    }
}
