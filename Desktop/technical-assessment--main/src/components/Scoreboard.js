import React, { useState, useEffect } from "react";
import Logo from "./logo/logo";
import fetchData from "../dataFetcher";
import Scorecard from "./Scorecard";
import "./Scoreboard.css";
import PartyLinks from "./PartyLinks";
import { candidateData } from "../fakeAPI";

function Scoreboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [isComplete, setComplete] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const resultData = await fetchData();
      setResults(resultData.results);
      setLoading(false);
      setComplete(resultData.isComplete);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Scoreboard">
      <header className="Election-scoreboard-header">
        <Logo language="en" />
      </header>
      <main>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <>
            <h1>Results</h1>
            {isComplete === true ? <h2>Counting is completed</h2> : <></>}
            <Scorecard
              results={results}
              candidateData={candidateData}
              isCompelete={isComplete}
            />
            {!isComplete && (
              <a className="Scoreboard-refresh" onClick={() => getData()}>
                Refresh
              </a>
            )}
            <h1>Learn more about the parties...</h1>
            <PartyLinks />
          </>
        )}
      </main>
    </div>
  );
}

export default Scoreboard;
