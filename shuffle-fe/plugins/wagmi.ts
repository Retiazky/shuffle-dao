import { UseWagmiPlugin, createConfig, http } from "use-wagmi";
import { mainnet, sepolia } from "use-wagmi/chains";
import { injected } from "use-wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UseWagmiPlugin, { config });
});
