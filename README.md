## Working with IPFS in React

## First Thing First

Eject the damn Creact-react-app

## CORS for local ipfs

`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST", "OPTIONS"]'
`

`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'`

`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'`

`ipfs config --json API.HTTPHeaders.Access-Control-Allow-Headers '["Authorization"]`

`ipfs config --json API.HTTPHeaders.Access-Control-Expose-Headers '["Location"]'`

## set the API access 



`ipfs config Addresses.API`

`ipfs config Addresses.API /ip4/127.0.0.1/tcp/5001`

`ipfs daemon`

