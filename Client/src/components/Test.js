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
  const apiKey =process.env.PATH_IMG_URL
  console.log(apiKey)

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <div>
          {data.data.map(item => (
            <div key={item._id}>
              <img src={`${process.env.PATH_IMG_URL}/${item.thumbnailURL}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{`${process.env.PATH_IMG_URL}/${item.thumbnailURL}`}</p>
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
