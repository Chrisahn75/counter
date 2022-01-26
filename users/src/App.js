import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./users.json";
import UserInfo from "./components/UserInfo.js";

const userList = userInfo.map((data) => {
  return (
    <UserInfo name={data.name} email={data.email} website={data.website}/>
  );
});
  return <div>{userList}</div>;

export default App;
