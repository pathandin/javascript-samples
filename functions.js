
//normal functions 
//pure functions 


function sum(a,b){

    var c = a + b;
    console.log(c);
    return c;
}

sum(10,20);


//anonymous //named funcion 
var sum2 = (function(a,b){
    
    var c = a + b;

    console.log(c);
    return c;
})

sum2(10,20);


//recusrsion example 
function a(){

    var condition = true; 
    
    if(condition != true){
        a();
    }
    
}
a()

//functions as object or function class 

function Person(){
    this.firstName = "Pathan din",
    this.lastName = "Sharma"
}

var person = new Person();

console.log(person.firstName,person.lastName);


//classes/objects with parameters

function EmployeeSapient(fName,lName){
    this.firstName = fName,
    this.lastName = lName
}

var pathandin = new EmployeeSapient("Pathan Din","Sharma");
console.log(pathandin.firstName,pathandin.lastName);

var ram = new EmployeeSapient("Ram Murat","Sharma");
console.log(ram.firstName,ram.lastName);

//function with paramers/arguments 

function simpleInterst(p,r,t){
    
    var si = ( (p*r*t) / 100 ) ;

    return si;
}

console.log ( simpleInterst(2000,5,2) );



function simpleInterst2(){
    
    var si = ( (arguments[0]*arguments[1]*arguments[2]) / 100 ) ;

    return si;
}

console.log ( simpleInterst2(2000,5,2) );