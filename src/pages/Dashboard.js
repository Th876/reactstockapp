import stocks from "../Data";
import { Link } from 'react-router-dom';

function Dashboard() {
    // console.log(stocks);
    return ( 
        <div className="dashboard">
            <h1>Most Active Stocks</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {/* Loop through list */}
                {stocks.map((company, index) => (
                        <tr key={index}>
                            {/*the backticks/Template literal allows you to link the symbol property from the array and display that when th elink is clicked */}
                            <td className="link"><Link to={`/stocks/${company.symbol}`}>{company.name}({company.symbol})</Link></td>
                            <td>{company.lastPrice}</td>
                            <td className="change-color">{company.change}</td>
                       </tr> 
                ))}
                </tbody>
                </table>
        </div>       
    )
}

export default Dashboard;
