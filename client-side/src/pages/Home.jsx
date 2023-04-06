import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const userGlobal = useSelector((state) => state.user.user);

  return (
    <div>
      <p>Welcome back, {userGlobal.name}</p>
    </div>
  );
}

export default Home;
