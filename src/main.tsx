import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ThemeProvider } from '@0xsequence/design-system'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { Chain, arbitrumSepolia } from 'wagmi/chains'
import { sequence } from '0xsequence'
import { getDefaultWaasConnectors } from '@0xsequence/kit-connectors'
import { KitConfig, KitProvider } from '@0xsequence/kit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
const chains: readonly [Chain, ...Chain[]] = [arbitrumSepolia as Chain]

const projectAccessKey = import.meta.env.VITE_PROJECT_ACCESS_KEY!;
const waasConfigKey = import.meta.env.VITE_WAAS_CONFIG_KEY!;
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID!
const appleClientId =  import.meta.env.VITE_APPLE_CLIENT_ID!;
const appleRedirectURI = 'https://' + window.location.host

const connectors = [
  ...getDefaultWaasConnectors({
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_ID,
    defaultChainId: 421614,
    waasConfigKey,
    googleClientId,
    appleClientId,
    appleRedirectURI,
    appName: 'Kit Demo',
    projectAccessKey
  })
]

/* @ts-expect-error-next-line */
const transports: Record<number, HttpTransport> = {}

chains.forEach(chain => {
  const network = sequence.network.findNetworkConfig(sequence.network.allNetworks, chain.id)
  if (!network) return

  transports[chain.id] = http(network.rpcUrl)
})

const config = createConfig({
  transports,
  chains,
  connectors
})

const kitConfig: KitConfig = {
  defaultTheme: 'light',
  signIn: {
    projectName: 'demos faucet'
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
)
