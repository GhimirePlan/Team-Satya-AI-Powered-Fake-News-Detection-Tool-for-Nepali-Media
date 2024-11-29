import React, { useEffect } from "react";
import "./search_result.scss";

// Import Particles or relevant configuration
import particles from "../../particlesjs-config";

const SearchResult = ({newsData}) => {
  useEffect(() => {
    // Initialize ParticlesJS here if needed
    // particles.init({ ...particles });
  }, []);

  return (
   
    <div className="news-table-container">
    <h2>Search Results</h2>
    <table className="news-table">
      <thead>
        <tr>
          
          <th>News Text</th>
          <th>Result</th>
          <th>Authenticity</th>
        </tr>
      </thead>
      <tbody>
        {newsData.map((news, index) => (
          <tr key={index}>
            <td>{news.text}</td>
            <td className={news.result === "Fake" ? "Non-Authentic" : "Authentic"}>
              {news.result}
            </td>
            <td>{news.percentage}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  );
};

export default SearchResult;
