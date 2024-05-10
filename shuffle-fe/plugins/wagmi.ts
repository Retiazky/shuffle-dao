import { UseWagmiPlugin, createConfig, http } from "use-wagmi";
import { mainnet, sepolia } from "use-wagmi/chains";
import { injected } from "use-wagmi/connectors";

export default defineNuxtPlugin((nuxtApp) => {
  const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [injected()],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
  nuxtApp.vueApp.use(UseWagmiPlugin, { config });
});
