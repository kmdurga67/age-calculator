import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const apiBaseUrl = process.env.API_BASE_URL;
  const serverURL = "http://localhost:5000"

  const [data, setData] = useState([]);

  console.log(apiBaseUrl);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverURL}/api/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <div>
     {data.length > 0 ? (
        <>
          <h1 style={{textAlign:"center", fontSize:"60px"}}>Dummy Data</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>UserName</th>
                <th>City</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.company.name}</td>
                  <td>{item.username}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ): <h1 style={{textAlign:"center",fontSize:"10rem",color:"green",marginTop:"6%"}}>Loading....</h1>}
    </div>
  );
};

export default Table;
