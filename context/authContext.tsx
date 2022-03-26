import { createContext } from "react";

const authContext = createContext({
  authenticatedUser: {},
  setAuthenticatedUser: (auth:any) => {}
});

export default authContext;