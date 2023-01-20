import axios from "axios";
import React from "react";

const baseURL = "http://localhost:3500/contact";

export default function Contact() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  

  if (!post) return null;

  return (
    <div className="com">
      <h1 style={{color:"rgb(31, 29, 29)"}}>Contact</h1>
      <hr/>

        <div>
          <i style={{color:"rgb(71, 180, 97)"}} class="bi bi-envelope-at-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Email : </span>
          <a href="mailTo:" style={{fontSize:"130%",color:"rgb(128, 125, 125)",textDecoration:"none"}} >{post.email}</a><br/>
          <i style={{color:"rgb(71, 180, 97)"}} class="bi bi-telegram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Telegram Handle : </span>
          <a href="#" style={{fontSize:"130%",color:"rgb(128, 125, 125)",textDecoration:"none"}} >{post.telegram}</a><br/>
          <i style={{color:"rgb(71, 180, 97)"}} class="bi bi-telephone-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{fontSize:"130%",color:"rgb(31, 29, 29)"}}>Phone No. : </span>
          <a href="#" style={{fontSize:"130%",color:"rgb(128, 125, 125)",textDecoration:"none"}} >{post.phone}</a><br/>
        </div>


      
    </div>
  );
}


{/* <table cellSpacing={"7px"} width={"100%"}>
        <tbody>
        <tr>
            <td>Email</td>
            <td>:</td>
            <td><a href="#">{post.email}</a></td>
        </tr>
        <tr>
            <td>Telegram Handle</td>
            <td>:</td>
            <td><a href="#">{post.telegram}</a></td>
        </tr>
        <tr>
            <td>Phone No.</td>
            <td>:</td>
            <td><a href="#">{post.phone}</a></td>
        </tr>
        <tr><td colSpan="3" align="center"><br/>
            {/* <button className="btp" onClick={download}>Download Resume</button> */}
            {/* </td></tr>
        </tbody>
      </table> */} 