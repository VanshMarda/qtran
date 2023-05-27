"use client";
import './globals.css'
import { Chain, WagmiConfig, createConfig, configureChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import Profile from './Profile';

const cantoChain = {
  id: 7700,
  name: 'Canto',
  network: 'canto',
  nativeCurrency: {
    decimals: 18,
    symbol: 'CANTO',
  },
  rpcUrls: {
    default: 'https://canto.neobase.one',
  },
  blockExplorers: {
    default: { name: 'Canto Explorer', url: 'https://tuber.build/' },
  },
  testnet: false,
};


const chains = [cantoChain];

const { publicClient, webSocketPublicClient } = configureChains(chains, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.id !== cantoChain.id) return null;
      return { http: chain.rpcUrls.default };
    },
    priority: 0,
  }),
]);

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient,
  webSocketPublicClient,
});


export default function page() {
  return (
    <div>
      <WagmiConfig config={config}>
        <Profile></Profile>
      </WagmiConfig>
    </div>
  )
}

