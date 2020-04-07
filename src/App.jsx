import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";

const App = () => {
  const [data, setData] = useState(null);
  const [currentSearch, changeCurrentSearch] = useState("Star Wars");

  const fetchData = (search) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f7b16c00&s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data.Search);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(currentSearch);
  }, [currentSearch]);

  return (
    <div className={styles.app}>
      <NavBar changeCurrentSearch={changeCurrentSearch} />
      <Dashboard data={data} />
    </div>
  );
};

export default App;
