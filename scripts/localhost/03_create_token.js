const hre = require("hardhat");

/** Configure the env values */
require('dotenv').config({
    path: './.env'
});


/**
 * This function calls the contract and tries to create a token
 * via the factory contract
 * 
 * @return transaction result
 */
async function createToken() {

    const factoryAddress = process.env.FACTORY_CA? process.env.FACTORY_CA : "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const token = {
        name: "Crab Token",
        symbol: "CRAB",
        supply: 1000
    };

    /** Get the contract */
    const Factory = await hre.ethers.getContractFactory("FactoryCloneTesting");
    const factory = Factory.attach(factoryAddress);

    /** Execute the transaction */
    const tx = await factory.createToken(token.name, token.symbol, token.supply);
    const receipt = await tx.wait();
    console.log(receipt);


};

/** Export the function */
module.exports = { createToken };


/** Make the module "executable" */
createToken()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });