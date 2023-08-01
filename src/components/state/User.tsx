import { useState } from "react";

type UserAuth = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<UserAuth | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Tommy",
      email: "tommy123@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User name is {user?.name} </h2>
      <h2>User email is {user?.email}</h2>
    </div>
  );
};

export default User;
