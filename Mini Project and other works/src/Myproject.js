import { useState } from "react";
import dataServiceObj from './dataServiceObj';

function BikesCrud() { 

    const [bikesArray, setBikesArray]  =  useState([]);
    const [model_number, setModel_number] = useState("");
    const [model_name, setModel_name] = useState("");
    const [company, setCompany] = useState("");
    const [displacement, setDisplacement] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    function  getBike_click()
    {
       dataServiceObj.getBike().then( resData => 
        {
            setBikesArray(resData.data);
        });
    }

    function  addBike_click()
    {
        let bikeObj = {};
        bikeObj.model_number = model_number; 
        bikeObj.model_name = model_name; 
        bikeObj.company = company; 
        bikeObj.displacement = displacement;
        bikeObj.price = price;
        bikeObj.image = image;

        dataServiceObj.addBike( bikeObj ).then(resData => 
        {
          alert("New Bike Details Are Added To The Server");
          getBike_click();
        });
        
    }
    
    function  deleteBike_click(mnum)
    {

        dataServiceObj.deleteBike( mnum ).then(resData => 
        {
          alert("Bike Details Are Deleted From The Server");
          getBike_click();
        });
    }

    function  selectBike_click(mnum)
    { 
         dataServiceObj.getBikeByModel( mnum ).then(resData => 
          {
            console.log(resData);
            let bikeObj = resData.data;  
            setModel_number(bikeObj.model_number);
            setModel_name(bikeObj.model_name);
            setCompany(bikeObj.company);
            setDisplacement(bikeObj.displacement);
            setPrice(bikeObj.price);
            setImage(bikeObj.image);
          }); 

    }

    function  updateBike_click()
    {
        let bikeObj = {};
        bikeObj.model_number = model_number; 
        bikeObj.model_name = model_name; 
        bikeObj.company = company; 
        bikeObj.displacement = displacement;
        bikeObj.price = price;
        bikeObj.image = image;

        dataServiceObj.updateBike( bikeObj ).then(resData => 
        {
          alert("Bike details are updated in  Server");
          getBike_click();
        });
        
    } 


    let result = bikesArray.map( item => 
        <tr>
            <td> {item.model_number}  </td>  
            <td> {item.model_name}  </td>                
            <td> {item.company}  </td>  
            <td> {item.displacement} </td>
            <td> {item.price} </td>
            <td> <img src= {item.image} width={250} height={180}/> </td>
            <td align="center">
                <a href="javascript:void(0);"    onClick={() => deleteBike_click(item.model_number)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectBike_click(item.model_number)}> Select</a>
            </td>
        </tr>);

  
  return (
      <>
      <div style={{backgroundColor : "lightgrey"}}>
          <h1 align = "center">The Show Room</h1>
          <hr/><br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <input placeholder="Enter Model Number"  value={model_number}  onChange={e => setModel_number(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input placeholder="Enter Model Name"  value={model_name}  onChange={e => setModel_name(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input placeholder="Enter Comapny Name"  value={company}  onChange={e => setCompany(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input placeholder="Enter Price"  value={price}  onChange={e => setPrice(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input placeholder="Enter CC"  value={displacement}  onChange={e => setDisplacement(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input placeholder="Enter Image Link"  value={image}  onChange={e => setImage(e.target.value)}  />
        <br/><br/>

          <div style={{"margin-left" : "520px"}}>
          <input type="button" value="Get Bikes" onClick={getBike_click} style = {{"color":"white", "backgroundColor" : "blue"}}/>&nbsp;&nbsp;&nbsp;
          <input type="button" value="Add Bike" onClick={addBike_click} style = {{"color":"white", "backgroundColor" : "blue"}}/>&nbsp;&nbsp;&nbsp;
          <input type="button" value="Update Bikes" onClick={updateBike_click} style = {{"color":"white", "backgroundColor" : "blue"}}/>&nbsp;&nbsp;&nbsp;
          </div>
        <br/><br/>
          <table align="center" cellPadding={15} border="center" cellSpacing={0} style = {{"textAlign" : "center", backgroundColor : "lightblue"}}>
              
              <thead>
                <tr>
                  <th>Model Number</th>
                  <th>Model Name</th>               
                  <th>Company</th>
                  <th>Displacement</th>
                  <th>Price</th>
                  <th>Image</th>    
                  <th> </th>              
                </tr>  
              </thead>          

              <tbody>
                {result}
              </tbody>

          </table>
          </div>

      </>   
  );
}

export default BikesCrud;