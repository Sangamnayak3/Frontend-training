import axios from 'axios';
import { useState } from 'react';
import React from 'react';

const url = "http://localhost:3500/education";

function Education()
{
    const[obj, setObj] = useState("") ;

          React.useEffect(() => { 
            axios.get(url).then((response) =>
             {setObj(response.data);});
            }, []);
          if (!obj)return null;  

          let result = obj.map(item => 

        <>          
          {/* <table>
            <tbody>
                <tr>
                    <span><i style={{fontSize:"110%",color:"rgb(71, 180, 97)"}} class="bi bi-app"></i></span>
                    <td style={{fontSize:"120%",color:"rgb(31, 29, 29)"}}>Institution Name</td>
                    <td>:</td>
                    <td>{item.institution}</td>
                </tr>
                <tr>
                    <td style={{fontSize:"120%",color:"rgb(31, 29, 29)"}}> Course Name </td>
                    <td> : </td>
                    <td> {item.course} </td>
                </tr>
                <tr>
                    <td style={{fontSize:"120%",color:"rgb(31, 29, 29)"}}>Location </td>
                    <td> : </td>
                    <td>{item.location}</td>
                </tr>
                <tr>
                    <td style={{fontSize:"120%",color:"rgb(31, 29, 29)"}}>Year Of Passing </td>
                    <td>{" "}:{" "}</td>
                    <td>{item.yop}</td>
                </tr>
            </tbody>
          </table>       */}

          <ul type="disc" style={{color:"rgb(71, 180, 97)"}}>
            <li> 
                <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Institution Name : </span>
                <span style={{fontSize:"130%",color:"rgb(128, 125, 125)"}} >{item.institution}</span>
            </li>
            <li> 
                <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Course Name : </span>
                <span style={{fontSize:"130%",color:"rgb(128, 125, 125)"}} >{item.course}</span>
            </li>
            <li> 
                <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Location : </span>
                <span style={{fontSize:"130%",color:"rgb(128, 125, 125)"}} >{item.location}</span>
            </li>
            <li> 
                <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Year Of Passing : </span>
                <span style={{fontSize:"130%",color:"rgb(128, 125, 125)"}} >{item.yop}</span>
            </li>
          </ul>
          <hr className='subhr'/>   
          </>
          );

    return(
        <div className='com'>
        <h1>Education</h1>
        <hr/>
        {result}            
        </div>

    )   
        
}
export default Education;