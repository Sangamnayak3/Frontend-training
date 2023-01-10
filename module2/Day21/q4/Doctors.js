function Doctors()
{
    let docArr = [{image : "assgn4-of-9-1-23/pic1.jpg", name : "Bully Maguire", spec : "Neurosurgeon", rate : 5},
    {image : "assgn4-of-9-1-23/pic2.jpg", name : "Loony Edgar", spec : "Cardiologist", rate : 3},
    {image : "assgn4-of-9-1-23/pic3.jpg", name : "John Wick", spec : "Oncologist", rate : 3},
    {image : "assgn4-of-9-1-23/pic4.jpg", name : "Dufus Marseille", spec : "ENT Specialist", rate : 4},
    {image : "assgn4-of-9-1-23/pic5.jpg", name : "Gary Snowman", spec : "Gynacologist", rate : 2},
    {image : "assgn4-of-9-1-23/pic6.jpg", name : "Amin Vardhan", spec : "Orthopedic", rate : 4},
    {image : "assgn4-of-9-1-23/pic7.jpg", name : "Kelly Van Dar", spec : "Neurosurgeon", rate : 4},
    {image : "assgn4-of-9-1-23/pic8.jpg", name : "Micheal Demirogus", spec : "Cardiologist", rate : 5} ];

     let results = docArr.map(item => 
        
        <div style = {{marginLeft : 100}}>
        <div style = {{backgroundColor : "lightgrey", float : "left"}}>

        <br/>

        <div style = {{width : 250, textAlign : 'center', backgroundColor : "white", margin : 10, borderRadius : 10}}>
            <br/>
            <img src = {item.image} width = {80} height = {80} style = {{borderRadius : 75}} /><br/>
            <p>{item.name}</p>
            <span>{item.spec}</span><br/><br/>
            <div>
                {(new Array (item.rate)).fill(1).map(item => <img src = {"assgn4-of-9-1-23/star.png"} width = {20}/>)}
            </div>          
            <div style ={ {backgroundColor : "lightgrey", borderRadius : 30}}>Book Appointment</div><br/>                        
        </div>
        </div>
        </div>
        );

    return(
        <>
        {results}
        </>
    )
   
}

export default Doctors;