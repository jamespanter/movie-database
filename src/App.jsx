import React, { useState, useEffect } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Dashboard from "./containers/Dashboard";

const App = () => {
  const [data, setData] = useState(null);
  const [currentSearch, changeCurrentSearch] = useState("harry");
  const [fetchPage, setFetchPage] = useState("1");
  const [searchYear, changeSearchYear] = useState("");

  useBottomScrollListener(() => {
    fetchData(currentSearch);
  });

  const fetchData = (search) => {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=4c65ecef&s=${search}&page=${fetchPage}`
    )
      .then((response) => response.json())
      .then((result) => {
        setFetchPage(parseInt(fetchPage) + 1);
        data
          ? setData({ ...data, Search: [...data.Search, ...result.Search] })
          : setData(result);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData(currentSearch);
  }, [currentSearch]);

  return (
    <div className={styles.app}>
      <NavBar
        changeCurrentSearch={changeCurrentSearch}
        setData={setData}
        setFetchPage={setFetchPage}
        changeSearchYear={changeSearchYear}
      />
      <Dashboard data={data} fetchPage={fetchPage} searchYear={searchYear} />
    </div>
  );
};

export default App;
