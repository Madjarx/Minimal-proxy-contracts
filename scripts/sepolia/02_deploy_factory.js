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

    const implementationAddress = process.env.IMPLEMENTATION_CA? process.env.IMPLEMENTATION_CA : "0x3682fbFac113263B4DdDE136565039Bc3E30f2cA";

    const Contract = await ethers.getContractFactory("FactoryCloneTesting");
    return await Contract.deploy(implementationAddress).then(f => f.deployed());
};


module.exports = { deployFactory };


/** Make it so that this file is "executable too" */
deployFactory().then(f => console.log(f));