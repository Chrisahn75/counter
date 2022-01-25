import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./users.json";
import "./components/UserInfo";

const data = "";

const App = () => {
  const userList = data.map((data) => (
    <p>
      {data.name} - {data.email} - {data.website}
    </p>
  ));

  return <p>{userList}</p>
};
export default App;
