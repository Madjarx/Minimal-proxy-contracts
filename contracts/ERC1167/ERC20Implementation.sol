// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts-upgradeable/presets/ERC20PresetFixedSupplyUpgradeable.sol";

contract ERC20Implementation is ERC20PresetFixedSupplyUpgradeable {

    function initialize(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address owner
    ) public initializer override {
        ERC20PresetFixedSupplyUpgradeable.__ERC20PresetFixedSupply_init(name, symbol, initialSupply, owner);
    }

    // function mint(address to, uint256 amount) external onlyOwner {
    //      _mint(to, amount);
    // }
}