import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {ThemeProvider} from '@0xsequence/design-system'
import { KitProvider, getKitConnectWallets } from '@0xsequence/kit';
import { getDefaultWaasConnectors } from '@0xsequence/kit-connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, polygon, arbitrumSepolia, Chain } from 'wagmi/chains';
import {ENV} from './env.example.js'

const queryClient = new QueryClient();

const chains: any = [mainnet, arbitrumSepolia];
const projectAccessKey = ENV.projectAccessKey;
const waasConfigKey = ENV.waasConfigKey;
const googleClientId = ENV.googleClientId;
const appleClientId = ENV.appleClientId;

// TODO: update this
const appleRedirectURI = '';

const metadata = [
  ["Falcon Mark IV Redtail", "A sleek, high-speed interceptor with a gleaming scarlet finish."],
  ["Hawkwind P-22 Emerald", "A nimble, versatile fighter with a striking, metallic emerald green coat."],
  ["Lightning Spectre G6", "A ghostly, agile aircraft with a unique, shimmering silver hue that seems to fade in and out of visibility."],
  ["Raptor Fury X2", "A fast and furious dogfighter with a fiery, vibrant orange livery, striking fear into the hearts of its adversaries."],
  ["Skyraider Z-11 Onyx", "A fearsome, all-black night fighter known for its stealth and power."],
  ["Thunderbolt XR-5 Cobalt", "A robust, heavy fighter painted in a deep, vivid cobalt blue."],
]

function Dapp(props: any) {
  const connectors = [
    ...getDefaultWaasConnectors({
      walletConnectProjectId: ENV.walletConnectId,
      defaultChainId: 421614,
      waasConfigKey,
      googleClientId,
      appleClientId,
      appleRedirectURI,
      appName: 'demo app',
      projectAccessKey,
      enableConfirmationModal: false,
    }),
    ...getKitConnectWallets(projectAccessKey, []),
  ];

  const transports: any = {};

  chains.forEach((chain: any) => {
    transports[chain.id] = http();
  });

  //@ts-ignore
  const config = createConfig({
    transports,
    connectors,
    chains,
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={{ defaultTheme: 'light', signIn: {showEmailInput: false} }}>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Dapp />
  </React.StrictMode>
);


export default App;
