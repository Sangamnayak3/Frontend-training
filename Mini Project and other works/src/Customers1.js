import axios from 'axios';
import { useState } from 'react';

function Customers1()
{
    const [customersArray , setCustomersArray] = useState([]);

    function getData_click()
    {
        let url = "https://fakestoreapi.com/products";
        axios.get(url).then( responseData =>
            {
            console.log(responseData.data);
            setCustomersArray(responseData.data);
            });
    }

    let result = customersArray.map(item => 
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td><img src= {item.image} width={150} height={150}></img></td>
        </tr>
        );

    return(
        <>
            <h1 align="center">Customers Data</h1>
            <hr/><br/>
            <button onClick={getData_click}>Get Data</button>
            <table border="2" cellPadding={15}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </>
    )    ;

    }

    export default Customers1;

    
