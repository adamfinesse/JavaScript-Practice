'use strict';
function min(a,b){
    if(a<b){
        return a;
    }
    return b;
}
let x = +prompt("enter an x",'');
let n = +prompt("enter an n",'');
function pow(x,n){
    return x **n;
}

let randomFunc = function(){
    //this example is not a anonymous function, its a expression that is not saved anywhere in the global scale, can only be called after its assigned to randomFunc,
    //before will cause an error which is different because a function declaration can be used anywhere.
    alert("hello!");
};
alert(min(2,5));
alert(min(3,-1));
alert(min(1,1));
alert(pow(x,n));
randomFunc();
alert(randomFunc);