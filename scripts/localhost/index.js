const {createToken} = require('./create_token');
const {deployFactory} = require('./deploy_factory');
const {deployImplementation} = require('./deploy_implementation');

require('dotenv').config({
    path: './.env'
});


/**
 * Main function definition
 */
async function main() {
    //
};



/**
 * Execute the main function
 */
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });