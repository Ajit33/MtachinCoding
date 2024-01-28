import { createContext } from "react";

export const FeatureFlagContext = createContext(null);

export default function featureFlagGlobalState({ children }) {
  return (
    <FeatureFlagContext.Provider value={{}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
