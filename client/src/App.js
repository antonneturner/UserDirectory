import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import Api from "./utils/API";
import SearchForm from "./components/SearchForm";
function App() {
  const [users, setUsers] = useState([]);
  const [cloneUsers, setCloneUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // use the API to return user data and set to users state
    Api.findUser()
      .then((res) => {
        setUsers(res.data.results);
        setCloneUsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;

    setSearch(value);

    const newUsers = cloneUsers.filter((user) => {
      return user.name.first.toLowerCase().includes(value.toLowerCase());
    });
    setUsers(newUsers);
  };

  const handleSorting = () => {
    let sortedUsers = users.sort((a, b) => {
      return a.name.first.localeCompare(b.name.first);
    });
    console.log(sortedUsers);

    sortedUsers = sortedUsers.map((user) => user);
    setUsers(sortedUsers);
  };

  return (
    <div className="App">
      <SearchForm value={search} handleInputChange={handleInputChange} />
      <Table users={users} handleSorting={handleSorting} />
    </div>
  );
}

export default App;
