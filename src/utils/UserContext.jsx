import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Test",
  },
});

export default UserContext;
