function Login()
{
    var User = "Admin";
    var pwd = "Admin123"
    function check()
    {
        let guser = document.getElementById("i1").value;
        let gpwd = document.getElementById("i2").value;
        if((guser==User) && (gpwd==pwd))
        {
            document.getElementById("p1").innerHTML = "WELCOME ADMIN";
        }
        else
        {
            alert("Invalid User");
            document.getElementById("i1").value = "";
            document.getElementById("i2").value = "";
        }
    }
    return(
        <>
        <div style={{backgroundColor : "lightgrey"}}>
        <br/><br/>
        <h1 align = "center">LOGIN PAGE</h1>
        <br/><br/><hr/><br></br>
        <div>
        <fieldset style={{backgroundColor : "lightCoral", width : 400, height : 200, marginLeft : 420, textAlign : "center"}}>
            <br/>
            User ID : <input type="text" id="i1"/><br/><br/>
            Password :  <input type="password" id="i2"/><br/><br/>
            <button onClick={check}>Login</button>
        </fieldset>
        <br/><br/>
        <h1 id="p1" style={{color : "red", textAlign : "center"}}></h1>
        </div>
        </div>
        </>
    )
}

export default Login;