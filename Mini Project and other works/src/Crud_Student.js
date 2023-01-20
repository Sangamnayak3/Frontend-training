import { useState } from "react";

function Crud_Student()
{
    const [studentArray , setStudentArray] = useState([]);
    const [sid , setSid] = useState("");
    const [sname , setSname] = useState("");
    const [course , setCourse] = useState("");
    const [age , setAge] = useState("");
    const [email , setEmail] = useState("");

    function createStudent_click()
    {
        let studentObj = {};
        studentObj.sid = sid;
        studentObj.sname = sname;
        studentObj.course = course;
        studentObj.age = age;
        studentObj.email = email;

        let tempStudentArray = [...studentArray];
        tempStudentArray.push( studentObj );
        setStudentArray( tempStudentArray);
    }

    function readStudent_click()
    {
        let tempStudentArray = [
            {sid:1, sname:"Aarohi", course:"Java", age:21, email:"tumhiho@gmail.com"},
            {sid:2, sname:"Bimal", course:"C++", age:24, email:"panmasala@gmail.com"},
            {sid:3, sname:"Chetan", course:"Python", age:19, email:"bhagat@gmail.com"},
            {sid:4, sname:"Dimple", course:"ML", age:20, email:"dumpa@gmail.com"},
            {sid:5, sname:"Elliot", course:"JavaScript", age:26, email:"angrezi@gmail.com"},
            {sid:6, sname:"Fatima", course:"DBMS", age:22, email:"bomb@gmail.com"},
            {sid:7, sname:"Gurpreet", course:"Angular", age:30, email:"guru@gmail.com"},
            {sid:8, sname:"Huma", course:"Bootstrap", age:23, email:"badlapur@gmail.com"},
            {sid:9, sname:"Issac", course:"Jquery", age:32, email:"iamnewton@gmail.com"},
            {sid:10, sname:"Janardhan", course:"HTML", age:29, email:"engapora@gmail.com"},
        ];

        setStudentArray ( tempStudentArray );
    }

    function selectStudent_click(id)
    {
        let studentObj = studentArray.find(item => item.sid == id);
        setSid(studentObj.sid);
        setSname(studentObj.sname);
        setCourse(studentObj.course);
        setAge(studentObj.age);
        setEmail(studentObj.email);
    }

    function updateStudent_click()
    {
        let tempStudentArray = [...studentArray];
        let index = tempStudentArray.findIndex(item => item.sid == sid);
        
        tempStudentArray[index].sid = sid;
        tempStudentArray[index].sname = sname;
        tempStudentArray[index].course = course;
        tempStudentArray[index].age = age;
        tempStudentArray[index].email = email;
        setStudentArray(tempStudentArray);
        
    }

    function deleteStudent_click(id)
    {
        let tempStudentArray = [...studentArray];
        let index = tempStudentArray.findIndex(item => item.sid == id);
        tempStudentArray.splice(index,1);

        setStudentArray( tempStudentArray);
    }

    let result = studentArray.map (item =>
       <tr>
        <td>{item.sid}</td>
        <td>{item.sname}</td>
        <td>{item.course}</td>
        <td>{item.age}</td>
        <td>{item.email}</td>
        <td>
            <a href="javascript:void(0);" onClick={() => selectStudent_click(item.sid) } >SELECT</a> |
            <a href="javascript:void(0);" onClick={() => updateStudent_click() } >UPDATE</a> |
            <a href="javascript:void(0);" onClick={() => deleteStudent_click(item.sid) } >DELETE</a>
        </td>
       </tr>
        );

    return(

        <>
        <h1 align="center">CRUD Operations on Students Data</h1>
        <hr/><br/>

        <input placeholder="Enter ID" value={sid} onChange={e => setSid(e.target.value)} />
        <input placeholder="Enter Name" value={sname} onChange={e => setSname(e.target.value)} />
        <input placeholder="Enter Course" value={course} onChange={e => setCourse(e.target.value)} />
        <input placeholder="Enter Age" value={age} onChange={e => setAge(e.target.value)} />
        <input placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} /><br/><br/>

        <button onClick={readStudent_click}>GET DATA</button>
        <button onClick={createStudent_click}>ADD DATA</button>

        <table border="2" align="center" cellPadding={"5px"}>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>COURSE</th>
                <th>AGE</th>
                <th>EMAIL</th>
            </tr>

            {result}
        </table>
        </>

    );
}
export default Crud_Student;