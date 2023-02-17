import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=1&limit=20`)
      .then((response) => response.json())
      .then((actualData) => setData(actualData));
  }, []);

  return (
    <div className="HomeImgWrapper">
      {data.map((item, index) => {
        console.log(item);
        return (
          <>
            <Link to={item.id}>
              <div className="main" key={index}>
                <img className="sub" src={item.download_url} alt="noimg" />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Home;
