import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <div>
          {data.data.map((item, index) => (
            <div key={item._id}>
            <img src={`http://localhost:8000/api/products/${item.thumbnailURL}`} alt="Thumbnail" />
              <p>{item.name}</p>
              <p>{item.thumbnailURL}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Test;
