/**
 * This function deploys the ERC20 implementation contract to the
 * local hardhat network
 * 
 * @returns contract deployment information
 */
async function deployImplementation() {

    const Contract = await ethers.getContractFactory("ERC20Implementation");
    return await Contract.deploy().then(f => f.deployed());

};


module.exports = { deployImplementation };


/** Make it so that this file is "executable too" */
deployImplementation().then(f => console.log(f));

/**
 * #TODO - make it so that the .env file is updated with the contract address
 */


