
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