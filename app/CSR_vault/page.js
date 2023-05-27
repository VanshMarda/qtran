"use client";
import { useEffect, useState } from 'react';
import Web3 from 'web3';
const page = () => {
    const [contract, setContract] = useState(null);
    const [contractAddress, setContractAddress] = useState('');
    const [contractABI, setContractABI] = useState([]);
    const [token, setToken] = useState();
    const [address, SetAddress] = useState("");
    const [method,SetMethod]=useState("");
    useEffect(() => {
        setContractABI([{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "_turnstileAddress", "internalType": "address" }] }, { "type": "event", "name": "DepositNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_feeRecipient", "internalType": "address", "indexed": false }, { "type": "address", "name": "_sender", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "UpdateFeeRecipient", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_feeRecipient", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "WithdrawFee", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "_amount", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "WithdrawNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_to", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "depositNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_feeRecipient", "internalType": "address payable" }] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "bytes4", "name": "", "internalType": "bytes4" }], "name": "onERC721Received", "inputs": [{ "type": "address", "name": "", "internalType": "address" }, { "type": "address", "name": "", "internalType": "address" }, { "type": "uint256", "name": "", "internalType": "uint256" }, { "type": "bytes", "name": "", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "updateFeeRecipient", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_feeRecipient", "internalType": "address payable" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdrawFee", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "uint256", "name": "_amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdrawNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_to", "internalType": "address" }] }]);
        setContractAddress("0x2FFE26dEE35eF3f5c02B56db3d41cbD314f30B53");
    }, []);

    const handleTokenNameChange = (e) => {
        setToken(e.target.value);
    };
    const handleAddressNameChange = (e) => {
        SetAddress(e.target.value);
    };


    const connectToContract = async () => {
        try {
            if (contractABI.length > 0 && contractAddress !== '') {
                const web3 = new Web3(window.ethereum);
                const instance = new web3.eth.Contract(contractABI, contractAddress);
                setContract(instance);
            }
        } catch (error) {
            console.error('Failed to connect to contract', error);
        }
    };

    const depositNFT = async () => {
        try {
            console.log(contract);
            if (contract) {
                const result = await contract.methods.depositNFT(token,address).call();
                console.log('Contract method result:', result);
            }
        } catch (error) {
            console.error('Failed to call contract method', error);
        }
    };
    const UpdateRecp = async () => {
      try {
          console.log(contract);
          if (contract) {
              const result = await contract.methods.UpdateFeeRecipient(token,address).call();
              console.log('Contract method result:', result);
          }
      } catch (error) {
          console.error('Failed to call contract method', error);
      }
  };
  const WithdrawalFee = async () => {
        try {
            console.log(contract);
            if (contract) {
                const result = await contract.methods.WithdrawFee(token,address).call();
                console.log('Contract method result:', result);
            }
        } catch (error) {
            console.error('Failed to call contract method', error);
        }
    };


    return (
        <>
            <div className='body_csr'>
                {/* <Link href="/component/Profile">Go to profile</Link> */}
                <div className="form">
                    <div className="title">DepositNFT</div>

                    <button className="blueButton border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200" style={{ marginTop: '20px' }} onClick={connectToContract}>
                        Connect to contract
                    </button>
                    <div className="input-container ic2">
                        <input id="token_id" className="input" type="text" placeholder=" " value={token} onChange={handleTokenNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder" >Token_id</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="address" className="input" type="text" placeholder=" " value={address} onChange={handleAddressNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Address</label>
                    </div>
                    <button className="submit" onClick={depositNFT}>submit</button>
                </div>
                <div className="form"  style={{ marginLeft: '20px' }}>
                    <div className="title">UpdateRecp</div>

                    <button className="blueButton border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200" style={{ marginTop: '20px' }} onClick={connectToContract}>
                        Connect to contract
                    </button>
                    <div className="input-container ic2">
                        <input id="token_id" className="input" type="text" placeholder=" " value={token} onChange={handleTokenNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder" >Token_id</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="address" className="input" type="text" placeholder=" " value={address} onChange={handleAddressNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Address</label>
                    </div>
                    <button className="submit" onClick={UpdateRecp}>submit</button>
                </div>
                <div className="form"  style={{ marginLeft: '20px' }}>
                    <div className="title">WithdrawalFee</div>

                    <button className="blueButton border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200" style={{ marginTop: '20px' }} onClick={connectToContract}>
                        Connect to contract
                    </button>
                    <div className="input-container ic2">
                        <input id="token_id" className="input" type="text" placeholder=" " value={token} onChange={handleTokenNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder" >Token_id</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="address" className="input" type="text" placeholder=" " value={address} onChange={handleAddressNameChange} />
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Address</label>
                    </div>
                    <button className="submit" onClick={WithdrawalFee}>submit</button>
                </div>
                
            </div>
        </>
    )
}

export default page
