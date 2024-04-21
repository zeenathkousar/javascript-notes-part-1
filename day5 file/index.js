var a= 10; //global space
function b(){
    var x=10; //local space
}
console.log(window.a);
console.log(a);
console.log(this.a) // here 'this' refer to global obj - so output 10
console.log(x);