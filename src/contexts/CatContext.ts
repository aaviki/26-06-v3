import { createContext /* , Dispatch  */ } from "react";

export const CatContext = createContext({
        currentCat: {},
        setCurrentCat: (currentCat: object) => {},
      });
      

