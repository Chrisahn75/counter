import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./users.json";
import "./components/UserInfo";



const App = () => {
  const userList = UserInfo.map((this) => (
    <p>
      {data.name} - {data.email} - {data.website}
    </p>
  ));

  return <p>{userList}</p>
};
export default App;
