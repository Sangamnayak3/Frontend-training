function About_Us()
{
    let docArr = [
    {image : "assgn4-of-9-1-23/pic1.jpg", name : "Bully Maguire", spec : "Director", rate : 5},
    {image : "assgn4-of-9-1-23/pic2.jpg", name : "Loony Edgar", spec : "General Manager", rate : 3},
    {image : "assgn4-of-9-1-23/pic3.jpg", name : "John Wick", spec : "Production Manager", rate : 3},
    {image : "assgn4-of-9-1-23/pic4.jpg", name : "Dufus Marseille", spec : "Chief Coordinator", rate : 4},
    {image : "assgn4-of-9-1-23/pic5.jpg", name : "Gary Snowman", spec : "Accountant", rate : 2},
    {image : "assgn4-of-9-1-23/pic6.jpg", name : "Amin Vardhan", spec : "Accountant", rate : 4},
    {image : "assgn4-of-9-1-23/pic7.jpg", name : "Kelly Van Dar", spec : "Technician", rate : 4},
    {image : "assgn4-of-9-1-23/pic8.jpg", name : "Micheal Demirogus", spec : "Technician", rate : 5} ];

     let results = docArr.map(item => 
        
        <div style = {{marginLeft : 100}}>
        <div style = {{backgroundColor : "lightgrey", float : "left"}}>

        <br/>

        <div style = {{width : 250, textAlign : 'center', backgroundColor : "lightyellow", margin : 10, borderRadius : 10}}>
            <br/>
            <img src = {item.image} width = {80} height = {80} style = {{borderRadius : 75}} /><br/>
            <p>{item.name}</p>
            <span>{item.spec}</span><br/><br/>
            <div>
                {(new Array (item.rate)).fill(1).map(item => <img src = {"assgn4-of-9-1-23/star.png"} width = {20}/>)}
            </div>          
            <div style ={ {backgroundColor : "lightgrey", borderRadius : 30}}><a href="/">Book Appointment</a></div><br/>                        
        </div>
        </div>
        </div>
        );

    return(
        <>
        <div style = {{textAlign : 'center', backgroundColor : "lightblue", fontFamily : "cursive"}}>
        <h1>Let Us Introduce Ourselves !!!</h1>
        <hr/>
        <h2 style={{color : 'red'}}>Out of all the showroom centers, we provide you a great connectivity to the Auto-Mobile world.</h2>

        <img src="https://i.pinimg.com/originals/8a/46/0a/8a460a45343c1fb99cfed7e4b63b63eb.jpg" width={380} height={300}/>

        <br/><br/><br/><hr/><br/>

        <h2 style={{color : 'whitesmoke'}}>Founder's Details</h2>
        <br/><hr/><br/>

        <h3>Our website is one of the biggest websites in the country that deals with customers across the nation. Our organization was initially founded by Mr. Bully Maguire. He was initially a member of the 
            <a href="/https://www.hotcars.com/here-are-the-most-notorious-biker-gangs-in-the-world/"> Locale Ed Pellum</a>. 
        </h3>
        <h3>
            Later he left his job and thought of initiating something unique in which he could help the people.He found the problems related to the real time world where people had to spent a lot of money in order to buy a motorbike.
            He later than started his own company along side his co-members where he started dealing with people who were interested in purchasing bikes.
        </h3>

        <h3>The company started with off stores where vehicles were sold with less cost in regardance to other franchises.
        <br/><br/><hr/><br/><br/>

        <img src="https://i.pinimg.com/originals/a6/29/0a/a6290a68ee0a64bf89a981e040c5e702.jpg" width={1200} height={700}/> 
        <br/>   
        <br/><br/><hr/><br/><br/>

             But later as it came to the public's view, they started taking an interest in what we sold.
        </h3>

        <br/><br/>

        <h3>Earlier we had just one off-stores shop. But later we opened our very own franchises in different locations.</h3>

        <br/><br/><hr/><br/><br/>

        <img src="https://i.pinimg.com/originals/2c/11/1b/2c111b80f3d6bc7e2dd2179c7cec52d0.jpg" width={1200} height={700}/><br/>

        <br/><br/><hr/><br/><br/>

        <h3>As our dealings increased we introduced ourself to the online platform.</h3>
        <br/><hr/><br/>

        <h2>Now let's meet the members of this family.</h2>
        <br/><br/><hr/><br/><br/>
        <hr/>

        {results}
        </div>
        </>
    )
   
}

export default About_Us;