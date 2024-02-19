import { ReactNode, createContext, useContext } from "react";
import { HarbourSpaceApiClient } from "utils";

/** KatanaApiClientContextProps */
export interface HarbourSpaceApiClientContextProps {
  client: HarbourSpaceApiClient;
  children?: ReactNode;
}

/** HarbourSpaceApiClientProviderProps */
export type HarbourSpaceApiClientProviderProps =
  HarbourSpaceApiClientContextProps;

const HarbourSpaceApiClientContext = createContext(
  {} as HarbourSpaceApiClientContextProps
);

/**
 * HarbourSpaceApiClientProvider
 * @param props Component props
 * @returns Component
 */
const HarbourSpaceApiClientProvider = (
  props: HarbourSpaceApiClientProviderProps
) => {
  const lifeLineApiClient = new HarbourSpaceApiClient();

  return (
    <HarbourSpaceApiClientContext.Provider
      value={{ client: lifeLineApiClient }}
    >
      {props.children}
    </HarbourSpaceApiClientContext.Provider>
  );
};

const useHarbourSpaceApiClient = (): HarbourSpaceApiClient => {
  const context = useContext(HarbourSpaceApiClientContext);
  if (!context)
    throw new Error("scholarshipContext must be used within a Provider");
  return context.client;
};

export { HarbourSpaceApiClientProvider, useHarbourSpaceApiClient };
