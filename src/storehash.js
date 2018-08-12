import web3 from './web3';

// const address = "0x9d2cca961249716f0a1dd805f7bc9e09a05e9c5c"; //Rop Network
const address = "0xb84b12e953f5bcf01b05f926728e855f2d4a67a9"; //org


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