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

    const factoryAddress = process.env.FACTORY_CA? process.env.FACTORY_CA : "0xd0e67843abc916C76252Eb7BF3Db20e12b2326eE";
    const token = {
        name: "Shark Token",
        symbol: "SHARK",
        supply: 100_000_000_000
    };

    /**
     * Note about supply
     * 
     * The supply number is plain and human-readable but that would result in total token supply of
     * 0.000_000_1 SHARK. To avoid this, we should format the number with ethers.utils 
     */


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

  