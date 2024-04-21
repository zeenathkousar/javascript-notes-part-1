var x=1;
a();
b(); // we can invoke or call funcs even before its initialization, bcoz of hoisting.
console.log(x)//1

function a(){
    var x=10;
    console.log(x); //10
}

function b(){
    var x=100;
    console.log(x);//100
}