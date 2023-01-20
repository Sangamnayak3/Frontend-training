import axios from 'axios';
import { useState, useEffect } from 'react';

function AboutMe(){
    const [myState, setMyState] = useState({});
    useEffect(() => {
        
    
        let url = "http://localhost:3500/aboutme";
        axios.get(url).then( resData => 
            {
            setMyState({
                ...myState,
                name: resData.data.name,
                image: resData.data.image,
                summary: resData.data.summary,
              });
            });
    
        
      }); 
      function download()
        {
         alert("work in progress");
        }

      useEffect(() => {
        let url = "http://localhost:3500/social";
        axios.get(url).then( resData => 
            {
            setMyState({
                ...myState,
                linkedin: resData.data.linkedin,
                github: resData.data.github,
                dpn: resData.data.dpn
              });
            });
        }); 

      
    
    
    let result =  (
        <>
        <div  className="profile col-lg" align="center">
            <h1 style={{color:"rgb(31, 29, 29)"}}>About Me</h1><br/>
            <img src={myState.image} height="150px" width="150px" /><br/><br/>
            <h2 style={{color:"rgb(31, 29, 29)"}}>{myState.name}</h2>
            <span> <a href={myState.linkedin}><i style={{color:"rgb(128, 125, 125)"}} className="bi bi-linkedin"></i></a> </span>&nbsp;
            <span> <a href={myState.github}><i style={{color:"rgb(128, 125, 125)"}} className="bi bi-github"></i></a> </span>&nbsp;
            <span> <a href={myState.dpn}><i style={{color:"rgb(128, 125, 125)"}} className="bi bi-person-bounding-box"></i></a> </span>
        </div>
        <br/>
            <p style={{textAlign:"center"}} className="summary">{myState.summary}</p>
        <div style={{textAlign:"center"}}>
        <button className="btp" onClick={download}>Download Resume</button><br/>
        </div>
        </>);

  
    return(
        < div>
                    {result}
        </div>
    )
}

export default AboutMe;