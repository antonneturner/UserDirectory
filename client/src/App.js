import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import { useState, useEffect } from "react";
import Api from "./utils/API";
import SearchForm from "./components/SearchForm";
function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    // use the API to return user data and set to users state
    Api.findUser()
      .then((res) => setUsers(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSearch(value);
  };

  return (
    <div className="App">
      <SearchForm value={search} handleInputChange={handleInputChange} />
      <Table users={users} />
    </div>
  );
}

export default App;
