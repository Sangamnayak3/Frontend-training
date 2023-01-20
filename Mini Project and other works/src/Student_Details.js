function Student_Details()
{    
    let sid = 101;
    let sname = 'scott';
    let course = 'react';
    let age = 20;
    let total = 10000;

    return(
            <table border="2" align="center">
                <tr>
                    <th>sid</th>
                    <th>sname</th>
                    <th>course</th>
                    <th>age</th>
                    <th>total</th>
                </tr>
                <tr>
                    <td>{sid}</td>
                    <td>{sname}</td>
                    <td>{course}</td>
                    <td>{age}</td>
                    <td>{total}</td>                 
                </tr>
            </table>)
}

export default Student_Details;