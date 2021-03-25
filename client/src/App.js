import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Api from "./utils/API";
function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    // use the API to return user data and set to users state
  }, []);
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
