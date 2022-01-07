import axios from 'axios';
import {useEffect,useState, useRef} from 'react';
import{Link} from "react-router-dom";
import Card from './Card'
import {useParams} from 'react-router-dom';

const getProductDetails = (id) => {
    return axios.get("http://localhost:3000/product/" + id);
}

export default function ProductDetails(){
     const {id} = useParams();
    const [isLoding, setIsLoading] = useState(true);
    const [data,setData] = useState(null);
    const handeleGetProduct = async () => {
        try{
            setIsLoading(true);
            const list = await getProductDetails(id);
            setData(list);
            setIsLoading(false);
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        handeleGetProduct();
    },[id]);

    if(isLoding){
        <div>...Looding</div>
    }
    return(
        <div style={{

            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 5,
            margin: 2,
           justifyContent: 'center',
           margin: 'auto',
            width: '50%',
      }}>
          <h3>Product Id {id}</h3>
            <div>
               <Card
               id={id}
                image={data?.data.image}
                name={data?.data.name}
                price={data?.data.price}
                type={data?.data.type}
               />
            </div>
            {id !== "1" && <Link to={`/${Number(id)}`}>Prev</Link>}
            <Link to={`/${Number(id)+1}`}>Next</Link>
        </div>
    )
}
