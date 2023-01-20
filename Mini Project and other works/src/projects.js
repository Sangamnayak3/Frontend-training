import axios from 'axios';
import { useState } from 'react';
import React from 'react';

const url = "http://localhost:3500/projects";

function Project()
{
    const[projectobj, setProjectObj] = useState("") ;

    React.useEffect(() => { 
        axios.get(url).then((response) =>
          {setProjectObj(response.data);});
        }, []);
      if (!projectobj)return null;  

      let result = projectobj.map(item => 

      <div style={{padding:"10px",backgroundColor:"#eff6f7",borderRadius:"3px"}}>
        <span style={{fontSize:"140%",fontWeight:"500", color:"rgb(71, 180, 97)"}} >{item.projectName}</span><br/>
        <span style={{fontSize:"120%",color:"rgb(31, 29, 29)"}}>Technology : </span><span style={{fontSize:"120%",color:"rgb(128, 125, 125)"}}>{item.technology}</span><br/>
        <p style={{fontSize:"100%",color:"rgb(31, 29, 29)"}}>{item.projectDes} </p>
        <p style={{fontSize:"100%",color:"rgb(31, 29, 29)"}}>{item.contribution}</p>     
      </div>
    );

    return(
        <div className='com'>
        <h1 style={{color:"rgb(31, 29, 29)"}}>Project</h1>
        <hr/>
        {result}            
        </div>

    )   
        
}
export default Project;