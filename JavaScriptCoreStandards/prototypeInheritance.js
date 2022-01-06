"use strict";
//https://javascript.info/task/search-algorithm

let head = {
    glasses: 1,
    
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
pillow: 2,
__proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);
alert( table.money );

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/hamster-proto
            
            let hamster = {
                stomach: [],

                eat(food) {
                    this.stomach.push(food);
                }
                };

                let speedy = {
                    stomach: [],
                __proto__: hamster
                };

                let lazy = {
                    stomach: [],
                __proto__: hamster
                };

                // This one found the food
                speedy.eat("apple");
                alert( speedy.stomach ); // apple

                alert( lazy.stomach ); // empty

//----------------------------------------------------------------------------------------------------------------------------------------------//

function Obj() {
    this.name= "yessir";
    //this.constructor= "na fam"; when this is set it wont work, we over wrote the constructor property otherwise it will creaste an obj2 from objs constructor
    // or overwrote the Obj.prototype object and didnt replace the constructor reference it will fail.
}
//Obj.prototype = {}; if this is set then obj2.name will return undefined
let obj = new Obj();
let obj2 = new obj.constructor();
console.log(obj2.name);

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/defer-to-prototype

            function f() {
                alert("Hello!");
                
            }

            Function.prototype.defer = function(ms){ 
                setTimeout(this,ms) 
            };
            

            f.defer(1000); // shows "Hello!" after 1 second
        
//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/defer-to-prototype-extended

            function f(a, b) {
                alert( a + b );
            }

            Function.prototype.defer = function(ms){
                //return (...rest) => setTimeout(f.call(this,...rest),arguments); returns 3 but doesnt wait 
                //return () => setTimeout(f.call(this,console.log(arguments)),ms);
                let f = this;
                return function(...args){
                    setTimeout(() => f.apply(this,args),ms);
                }
            }

            f.defer(1000)(1, 2); // shows 3 after 1 second

//----------------------------------------------------------------------------------------------------------------------------------------------//

//https://javascript.info/task/dictionary-tostring
let dictionary = Object.create(null);

// your code to add dictionary.toString method

Object.defineProperty(dictionary,"toString",{
    "enumerable" : false,
    value: function() {return Object.keys(this).toString();} 
    
});


/* what it wanted is below, I did it by not using the set descriptor in Object.create cuz I didnt think they wanted me to use it by the wording above.
let dictionary = Object.create(null, {
    toString: { // define toString property
        value() { // the value is a function
        return Object.keys(this).join();
        }
    }
    });
    */
// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"

//----------------------------------------------------------------------------------------------------------------------------------------------//