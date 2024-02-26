// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC20PresetFixedSupplyUpgradeable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";


contract FactoryCloneTesting {
    address immutable tokenImplementation;

    constructor(address _tokenImplementation) public {
        tokenImplementation = _tokenImplementation;
    }

    function createToken(string calldata name, string calldata symbol, uint256 initialSupply) external returns (address) {
        address clone = Clones.clone(tokenImplementation);
        ERC20PresetFixedSupplyUpgradeable(clone).initialize(name, symbol, initialSupply, msg.sender);
        return clone;
    }
}
