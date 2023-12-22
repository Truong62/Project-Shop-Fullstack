import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/products'); 
          setData(response.data); 
          console.log(data.data)
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData(); 
    }, []); 
  
    return (
      <div>
      <img src="/ds" alt=""/>
        <h1>Data from API:</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };


export default Test;