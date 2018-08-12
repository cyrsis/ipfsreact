import web3 from './web3';

// const address = "0x9d2cca961249716f0a1dd805f7bc9e09a05e9c5c"; //Rop Network
const address = "0x692a70d2e424a56d2c6c27aa97d1a86395877b3a"; //org


const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "string"
            }
        ],
        "name": "setHash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getHash",
        "outputs": [
            {
                "name": "x",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

export default new web3.eth.Contract(abi, address)