// countries first compunant
import React from 'react';
import './Countries.css';
import { useEffect,useState } from 'react';
import EachCountry from './EachCountry';



const Countries = () => {
    const [count, setCount] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCount(data))
    },[])
    return (
        <div>
            <h1 className="text-danger p-3">Bootsrap</h1>
             <h1>Countries Length :{count.length}</h1>
             <div  className='parents'>

          
            {
                count.map(country=><EachCountry country={country}></EachCountry>)
            }
            </div>
            
        </div>
    );
};

export default  Countries;