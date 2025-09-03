import { createContext, useState, type PropsWithChildren } from "react";

export const userContext = createContext<userNameobj | null>(null);
type userNameobj = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
export default function UserContext({ children }: PropsWithChildren) {
  const [userName, setUserName] = useState<string>("Guest");
  const userNameobj = {
    userName: userName,
    setUserName: setUserName,
  };

  return (
    <>
      <userContext.Provider value={userNameobj}>
        {children}
      </userContext.Provider>
    </>
  );
}
