import { useState, useEffect } from "react";
import "./Scorecard.css";

function Scorecard({ results, candidateData, isCompelete }) {
  const [max, setMax] = useState();

  useEffect(() => {
    const max = results.reduce((acc, student) => {
      if (acc === null || student.votes > acc) return student.votes;
      return acc;
    }, null);
    setMax(max);
    console.log(max);
  }, [results]);

  if (!results || results.length === 0) {
    return <div>No results</div>;
  }

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
