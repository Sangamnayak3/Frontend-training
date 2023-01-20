import axios from "axios";
import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const baseURL = "http://localhost:3500/professional";

export default function Pro() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

 let result = post.skills.map(item =><tr><td style={{color: "rgb(128, 125, 125)"}}>{item.skill}</td><td>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    ></Box>
    <Typography component="legend"></Typography>
    <Rating name="read-only" style={{color:"rgb(71, 180, 97)"}} value={item.level} readOnly />
    </td></tr>);
  return (
    <div className="com">
      <h1 style={{color:"rgb(31, 29, 29)"}}>Professional</h1>
      <hr/>
      <p className="summary">{post.summary}</p>
      <table align="center" cellSpacing={"7px"}>
        <tbody>
        <tr>
            <th style={{color:"rgb(31, 29, 29)"}}>Skill</th>
            <th style={{color:"rgb(31, 29, 29)"}}>Level</th>
        </tr>
        {result}
        </tbody>
      </table>
    </div>
  );
}