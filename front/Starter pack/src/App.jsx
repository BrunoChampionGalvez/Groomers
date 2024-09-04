import {useState, useEffect} from "react";

import HomePage from "./views/HomePage";
import Navbar from "./components/NavBar";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  });

  return (
    <div className="App">
      <Navbar />
      <HomePage contacts={contacts} />
    </div>
  );
}

export default App;
