import React from 'react';
import "./Countries.css";

const EachCountry = (props) => {
    const{name,capital,population,region,flags}=props.country;
    return (
        <div className='every-country'>
            <img src={flags.png}></img>
            <h2>Name :{name.common}</h2>
            <h2>Capital : {capital}</h2>
            <h2>Population :{population}</h2>
            <h2>Region :{region}</h2>
            
        </div>
    );
};

export default EachCountry;