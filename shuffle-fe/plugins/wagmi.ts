import { UseWagmiPlugin, createConfig, http } from "use-wagmi";
import { baseSepolia } from "use-wagmi/chains";
import { injected } from "use-wagmi/connectors";

export const config = createConfig({
  chains: [baseSepolia],
  connectors: [injected()],
  transports: {
    [baseSepolia.id]: http(),
  },
});
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(UseWagmiPlugin, { config });
});
