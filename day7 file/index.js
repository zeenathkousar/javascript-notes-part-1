// function a(){
//     console.log(b); // get output as 10 , somehow function is able to access global var b

// }
// var b=10;
// a();

// function a(){
//     c();
//     function c(){
//     console.log(b); // get output as 10 , somehow function is able to access global var b
//     }
// }
// var b=10;
// a();

function a(){
    var b=10;
    c()
    function c(){

    }
}
a();
console.log(b)