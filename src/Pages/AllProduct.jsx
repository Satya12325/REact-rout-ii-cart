import axios from 'axios';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const fetchUsers = () => {
    return axios.get('http://localhost:3000/product')
}

export default function AllProducts() {
    const [data, setData] = useState([]);
    const [isLoding, setIsLoading] = useState(true);

    const handleFetchUsers = async () => {
        try {
            setIsLoading(true);
            const List = await fetchUsers();
            setData(List);
            setIsLoading(false);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleFetchUsers();
    },[]);

    if(isLoding) {
        return (<div className="flex">
        <div className ="spinner">
        </div>
        ...Looding
        </div>)
    }



    return (
        <div>
            <h3 style={{textAlign: 'center'}}>Products</h3>
            <div style={{ display: "flex", flexDirection: "column",flexWrap: "wrap", gap: 2 }}>
            {data?.data.map((item) => {
            return (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              margin: "20px",
              padding: 5,
              border: "1px solid gray",
              backgroundColor: "rgb(238, 247, 247)",
            }}
          >
               <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            
           
            <Link to={`/${item.id}`}>Show more</Link>
          </div>
        )
    }
        )}
            </div>
        </div>
    )
}