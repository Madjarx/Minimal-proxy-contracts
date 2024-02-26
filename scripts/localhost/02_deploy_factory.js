/** Configure the environment */
require('dotenv').config({
    path: './.env'
});


/**
 * This function deploys the factory / clone contract
 * 
 * @returns contract deployment information
 */
async function deployFactory() {

    const implementationAddress = process.env.IMPLEMENTATION_CA? process.env.IMPLEMENTATION_CA : "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    const Contract = await ethers.getContractFactory("FactoryCloneTesting");
    return await Contract.deploy(implementationAddress).then(f => f.deployed());
};


module.exports = { deployFactory };


/** Make it so that this file is "executable too" */
deployFactory().then(f => console.log(f));