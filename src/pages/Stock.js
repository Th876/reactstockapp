///stocks/:symbol
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import stocks from '../Data';


function Stock(props) {
    const params = useParams();
    const symbol = params.symbol;
console.log(symbol);


    console.log(props.data);
    //Need to look through each element's symbol & compare it to our params
    const displayIndividualStock = props.data.find((element)=> symbol === element.symbol); 
    console.log(displayIndividualStock)
    return (
    <div className='style-stock'>
        <h2>Name: {displayIndividualStock.name}</h2>
        <h3>Last Price: {displayIndividualStock.lastPrice}</h3>
        <h3>Change: {displayIndividualStock.change}</h3>
        <h3>High: {displayIndividualStock.high}</h3>
        <h3>Low: {displayIndividualStock.low}</h3>
        <h3>Open: {displayIndividualStock.open}</h3>

    </div>)
}

export default Stock;