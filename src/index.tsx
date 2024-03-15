import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {ThemeProvider} from '@0xsequence/design-system'
import { KitProvider, getKitConnectWallets } from '@0xsequence/kit';
import { getDefaultWaasConnectors } from '@0xsequence/kit-connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, arbitrumSepolia } from 'wagmi/chains';
import {ENV} from './env.example.js'

const queryClient = new QueryClient();

const chains: any = [mainnet, arbitrumSepolia];
const projectAccessKey = ENV.projectAccessKey;
const waasConfigKey = ENV.waasConfigKey;
const googleClientId = ENV.googleClientId;
const appleClientId = ENV.appleClientId;

// TODO: update this
const appleRedirectURI = '';

console.log(process.env.REACT_APP_projectAccessKey)

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
