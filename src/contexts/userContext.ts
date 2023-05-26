import { createContext /* , Dispatch  */ } from "react";

export const UserContext = createContext({
  hasUser: false,
  setHasUser: (hasUser: boolean) => {},
});

export const LogedUserContext = createContext({
  logedUser: "",
  setLogedUser: (logedUser: string) => {},
});
