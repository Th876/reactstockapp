///stocks/:symbol
import stocks from "../Data";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Stock(props) {
    const comp = useParams();
    const symbol = comp.symbol;
// console.log(symbol);


const [stockInfo, setStockInfo] = useState(null);
    
    // symbol: "", lastPrice: 0, change:0, High:0, Low: 0, Open: 0

    if(stockInfo === null) {
        stocks.map((item,index) => {
            if(symbol === item.symbol)
            {
              if(stockInfo === null)
              {
                setStockInfo({
                  symbol: item.symbol,
                  lastPrice: item.lastPrice,
                  High: item.high,
                  Low: item.low,
                  Open: item.open
                })
              }
            }
          })
    } 
let emptyArr = [];
emptyArr.push(stockInfo);
console.log(emptyArr);
  useEffect(() => {
    console.log(stockInfo);
  },
  [stockInfo]
  );

//   const updateStock = stockInfo.map((item, index) => {
    // return(
        // <div>
            {/* Last Price: {item.lastPrice} */}
        {/* </div> */}
        // 
        // 
        // 
    // )
//   })
const updateStock = () => {
    // console.log("inside ");
    return(
        <ul>

        </ul>
    )
    // for (const [key, value] of Object.entries(stockInfo)) {
        // print key and value on console
        // return (<div>
            {/* <div>{`${key}: ${value}`}</div> */}
            {/* <div>{`${key}: ${value}`}</div> */}
        {/* </div>) */}
    //   }
    // for(const item in stockInfo) 
    // {
    //    return <div>{`${item}: ${stockInfo[item]}`}</div>
    // } 
}


    return ( 
        <div>
            <div className="individual-stock">
                Symbol:{symbol}
                {stockInfo? updateStock() : <div>Not found</div>}
                {/* {updateStock} */}
            </div>
        </div>
     );
}

export default Stock;