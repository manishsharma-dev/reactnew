import React, { useState } from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [userList, setUsersList] = useState([]);
  const fetchUserData = (data) => {
    setUsersList((prevState) => {
      return [...prevState, { ...data, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onFetchUserData={fetchUserData} />
      {userList.length > 0 && <UsersList users={userList} />}
    </div>
  );
}

export default App;
