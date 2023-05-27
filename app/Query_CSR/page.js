"use client";
import { useState } from "react";
const { ethers } = require("ethers");

export default function Page() {
    const [block1WithdrawFee, setBlock1WithdrawFee] = useState(0);
    const [block2WithdrawFee, setBlock2WithdrawFee] = useState(0);
    const [block1WithdrawNFT, setBlock1WithdrawNFT] = useState(0);
    const [block2WithdrawNFT, setBlock2WithdrawNFT] = useState(0);
    const [block1UpdateFeeRecipient, setBlock1UpdateFeeRecipient] = useState(0);
    const [block2UpdateFeeRecipient, setBlock2UpdateFeeRecipient] = useState(0);
    const [events, setEvents] = useState([]);

    const getEvents = async (eventName, startBlock, endBlock) => {
        alert("Submitted please wait ...!!");
        const ABI = [{ "type": "constructor", "stateMutability": "nonpayable", "inputs": [{ "type": "address", "name": "_turnstileAddress", "internalType": "address" }] }, { "type": "event", "name": "DepositNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_feeRecipient", "internalType": "address", "indexed": false }, { "type": "address", "name": "_sender", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "UpdateFeeRecipient", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_feeRecipient", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "event", "name": "WithdrawFee", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "uint256", "name": "_amount", "internalType": "uint256", "indexed": false }], "anonymous": false }, { "type": "event", "name": "WithdrawNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256", "indexed": false }, { "type": "address", "name": "_to", "internalType": "address", "indexed": false }], "anonymous": false }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "depositNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_feeRecipient", "internalType": "address payable" }] }, { "type": "function", "stateMutability": "pure", "outputs": [{ "type": "bytes4", "name": "", "internalType": "bytes4" }], "name": "onERC721Received", "inputs": [{ "type": "address", "name": "", "internalType": "address" }, { "type": "address", "name": "", "internalType": "address" }, { "type": "uint256", "name": "", "internalType": "uint256" }, { "type": "bytes", "name": "", "internalType": "bytes" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "updateFeeRecipient", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_feeRecipient", "internalType": "address payable" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdrawFee", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "uint256", "name": "_amount", "internalType": "uint256" }] }, { "type": "function", "stateMutability": "nonpayable", "outputs": [], "name": "withdrawNFT", "inputs": [{ "type": "uint256", "name": "_tokenId", "internalType": "uint256" }, { "type": "address", "name": "_to", "internalType": "address" }] }]
        const contractAddress = "0x2FFE26dEE35eF3f5c02B56db3d41cbD314f30B53"
        const provider = new ethers.providers.JsonRpcProvider("https://canto.slingshot.finance");
        const contract = new ethers.Contract(contractAddress, ABI, provider)
        const events = await contract.queryFilter(eventName, startBlock, endBlock);
        setEvents(events);
        console.log(events);
        return events;
    }

    const bnWithdrawFee1 = (e) => {
        setBlock1WithdrawFee(parseInt(e.target.value));
    };
    const bnWithdrawFee2 = (e) => {
        setBlock2WithdrawFee(parseInt(e.target.value));
    };
    const bnWithdrawNFT1 = (e) => {
        setBlock1WithdrawNFT(parseInt(e.target.value));
    };
    const bnWithdrawNFT2 = (e) => {
        setBlock2WithdrawNFT(parseInt(e.target.value));
    };
    const bnUpdateFeeRecipient1 = (e) => {
        setBlock1UpdateFeeRecipient(parseInt(e.target.value));
    };
    const bnUpdateFeeRecipient2 = (e) => {
        setBlock2UpdateFeeRecipient(parseInt(e.target.value));
    };


    return (
        <div className="bg_black" >
            <div className="bg-black" style={{ display: "flex" }}>
                <div className="chuiya flex flex-col items-center justify-center bg-gray-200 text-grey-700 w-3/4 p-10">
                    <h1 className="font-bold text-2xl">WithdrawFee</h1>
                    <div className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                        <label className="font-semibold text-xs" for="usernameField">Starting block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block1WithdrawFee} onChange={bnWithdrawFee1} />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Ending Block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block2WithdrawFee} onChange={bnWithdrawFee2} />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => {
                            getEvents("WithdrawFee", block1WithdrawFee, block2WithdrawFee);
                        }} >Submit</button>
                    </div>
                </div>

                <br />
                <div className="chuiya flex flex-col items-center justify-center bg-gray-200 text-gray-700 w-3/4 p-10">
                    <h1 className="font-bold text-2xl">WithdrawNFT</h1>
                    <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                        <label className="font-semibold text-xs" for="usernameField">Starting block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block1WithdrawNFT} onChange={bnWithdrawNFT1} />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Ending Block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block2WithdrawNFT} onChange={bnWithdrawNFT2} />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => getEvents("WithdrawNFT", block1WithdrawNFT, block2WithdrawNFT)} >Submit</button>

                    </form>
                </div>
                <br />
                <div className="chuiya flex flex-col items-center justify-center bg-gray-200 text-gray-700 w-3/4 p-10">
                    <h1 className="font-bold text-2xl">UpdateFeeRecipient</h1>
                    <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                        <label className="font-semibold text-xs" for="usernameField">Starting block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block1UpdateFeeRecipient} onChange={bnUpdateFeeRecipient1} />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Ending Block</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" value={block1UpdateFeeRecipient} onChange={bnUpdateFeeRecipient2} />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => getEvents("UpdateFeeRecipient", block1UpdateFeeRecipient, block2UpdateFeeRecipient)}>Submit</button>

                    </form>
                </div>
            </div>
            <div className=" chutiya flex flex-col justify-center">
                {events.map((event, index) => (
                    <div className=" chutiya max-w-7xl mx-auto">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <h4>Event #{index + 1}</h4>
                                    <p className="text-slate-800">Address : {event.address}</p>
                                    <p className="text-slate-800">Event : {event.event}</p>
                                    <p className="text-slate-800">Block Number : {event.blockNumber}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

