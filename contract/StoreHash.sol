pragma solidity ^0.4.17;



contract StoreHash {
    string ipfsHash;

    function setHash(string x) public {
        ipfsHash = x;
    }

    function getHash() public view returns (string x) {
        return ipfsHash;
    }
}
