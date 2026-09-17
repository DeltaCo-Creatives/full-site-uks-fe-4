import { createContext, useContext } from "react";

export const ExploreContext = createContext(() => {});

export function useExplore() {
  return useContext(ExploreContext);
}
