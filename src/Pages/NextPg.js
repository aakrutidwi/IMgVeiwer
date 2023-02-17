import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const NextPg = () => {

    let { id } = useParams();
    console.log(id);

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`https://picsum.photos/v2/list?page=1&limit=20`)
        .then((response) => response.json())
        .then((actualData) => setData(actualData));
    }, []);
  
  return (
    <div>
         {data.map((item, index) => {
             return (
                <>
                    {item.id===id && <div className="main1" key={index}>
                        <div className='authhor'>{item.author}</div>
        <img className="sub1" src={item.download_url} alt="noimg" />
      </div>}
       
                </>
              );
        
      })}
    </div>
  )
}

export default NextPg;
