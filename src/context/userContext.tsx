import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export const userContext = createContext<UserObj | null>(null);

export type User = {
  username: string | undefined;
  role: string;
  created_at: string;
  hash_password: string;
  id: string;
  lowestTime: string;
  token: String;
};
type UserObj = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const userObj: User = {
  username: "Guest",
  role: "",
  created_at: "",
  hash_password: "",
  id: "",
  lowestTime: "",
  token: "",
};

export default function UserContext({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(userObj);
  const Obj: UserObj = {
    user: user,
    setUser: setUser,
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <userContext.Provider value={Obj}>{children}</userContext.Provider>
    </>
  );
}
