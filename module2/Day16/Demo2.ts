function getMessage():void {
    console.log("Welcome to TypeScript");
}

function greeting(uname:string):void {
    let str = "Hi " + uname + ", Wish You A Happy New Year";
    console.log(str);
}

// Optional parameters
function showDetails(sname:string, course:string, age?:number) {

    let str:string  = "Student Name : " + sname + ", Course Name : " + course;
    
    if(age != undefined)
    {
        str += ", Age : " + age;
    }

    console.log(str);
}


function getTotal( price:number, qty:number=1)
{
   var total:number = price * qty;
    var str:string = `Unit Price : ${price} , Quantity : ${qty}, Total Amount  : ${total}`;   

    console.log(str);
}

function sum(...ar:number[])
{
    var s:number  = 0;

    for(let n of ar)
    {
        s  = s + n;
    }
    console.log("Sum Result : " + s);
}
 
// Function Calling
getMessage();
greeting("Scott");
greeting("Narasimha");

showDetails("Scott", "Angular",  20); 
showDetails("Smitha", "NodeJS"); 

getTotal(2500, 3);
getTotal(1500);

sum(10);
sum(10, 20, 70);
sum(10, 20, 40, 50, 60, 70);
sum(10, 20);
sum(10, 20, 30, 40, 50, 60, 70, 80, 90);
