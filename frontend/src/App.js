import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./page/dashboard";

function App() {
  // here i have created state variable for storing the data which is coming from api
  const [appData, setAppData] = useState(null);

  // useEffect for triggering the data whenever page is load
  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((actualdata) => setAppData(actualdata.data.data.electricity));
  }, []);
  // the dashboard will take some time as the data is fetching from the api

  // and passing the state variable as props to the Dashboard component
  return (
    <div className="App">{appData && <Dashboard appData={appData} />}</div>
  );
}

export default App;
