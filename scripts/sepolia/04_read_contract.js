const hre = require("hardhat");

require('dotenv').config({
    path: './.env'
});


/**
 * Main function definition
 */
async function main() {
    const tokenAddress = process.env.IMPLEMENTATION_CA? process.env.IMPLEMENTATION_CA : "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    /** */
    const Token = await hre.ethers.getContractFactory("ERC20Implementation");
    const token = Token.attach(tokenAddress);

    /** */
    const name = await token.name();
    const symbol = await token.symbol();

    console.log("Name:", name);
    console.log("Symbol:", symbol);
};

/** */
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });