import { useState, useEffect } from "react";
import "./Scorecard.css";

function Scorecard({ results, candidateData, isCompelete }) {
  const [max, setMax] = useState();

  useEffect(() => {
    if (!results || results.length === 0) return <div>No results</div>;
    const max = results.reduce((acc, candidate) => {
      if (acc === [] || candidate.votes > acc) return candidate.votes;
      return acc;
    }, []);
    setMax(max);
    console.log(max);
  }, [results]);

  // if (!results || results.length === 0) {
  //   return <div>No results</div>;
  // }

  let scores = [];

  for (let i = 0; i < results.length; i++) {
    scores.push(
      <tr key={i}>
        <td
          className={
            results[i].votes === max && isCompelete === true ? "testClass" : ""
          }
        >
          {results[i].party}
        </td>
        <td
          className={
            results[i].votes === max && isCompelete === true ? "testClass" : ""
          }
        >
          {candidateData[i].name}
        </td>
        <td
          className={
            results[i].votes === max && isCompelete === true ? "testClass" : ""
          }
        >
          {results[i].votes}
        </td>
      </tr>
    );
  }

  return (
    <div className="Scorecard">
      <table className="Scorecard-table">
        <thead>
          <tr>
            <th>Party</th>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>{scores}</tbody>
      </table>
    </div>
  );
}

export default Scorecard;
