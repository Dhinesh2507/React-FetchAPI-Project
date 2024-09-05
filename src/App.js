import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./App.css";  // Import the CSS file

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState('users');

  const fetchData = async (type) => {
    try {
      const response = await fetch(`${API_URL}${type}`);
      const result = await response.json();
      setData(result);
      setDataType(type);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch user data by default
  useEffect(() => {
    fetchData('users');
  }, []);

  // Function to render table headers dynamically
  const renderTableHeader = () => {
    if (data.length === 0) return null;
    const headers = Object.keys(data[0]);
    return headers.map((header) => <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>);
  };

  // Function to render table rows dynamically
  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item.id}>
        {Object.values(item).map((val, index) => (
          <td key={index}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="App">
      <h1>Dhinesh's React Sample Fetch API</h1>
      <Button fetchData={fetchData} />

      <h2>{dataType.charAt(0).toUpperCase() + dataType.slice(1)} Data</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
