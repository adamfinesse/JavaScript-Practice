"use strict";

let styles = ["Jazz","Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap","Reggae");
console.log(styles);
alert(styles);

//----------------------------------------------------------------------------------------------------------------------------------------------//

function sumInput(){
    let arr = [];

    while(1){
        let input = prompt("enter values to be summed",'');
        if(input === "" || input ===null||!isFinite(input)) break;
        arr.push(+input);
        //input = 0;
    }

    let sum =0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumInput(1));

//----------------------------------------------------------------------------------------------------------------------------------------------//

function camelize(str){
    let stringArr = str.split("-");

    if(stringArr.includes("")){
            stringArr.splice(stringArr.indexOf(""),1);
        }

    let result = stringArr[0].toLowerCase();
    
    for(let i=1; i<stringArr.length; i++){

        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1).toLowerCase();
        result += stringArr[i]
    }
    return result;
}
/* could have done this way easier
        function camelize(str) {
            return str
                .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
            .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) 
            // capitalizes first letters of all array items except the first one // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
*/

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//----------------------------------------------------------------------------------------------------------------------------------------------//

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr,a,b){
    let newArr = [];
    arr.forEach(item => (item >=a) && (item <=b) ? newArr.push(item) : undefined);
    return newArr;
}
// easier solution would be to use filter with same condition as it turns an array and gets rid of the undefined and array creation
// one line return arr.filter(item => (a <= item && item <= b));

//----------------------------------------------------------------------------------------------------------------------------------------------//

function filterRangeInPlace(arr, a, b){
    //tempArr = arr.slice(0);
    arr.filter( item => (item > a && item < b ) ? undefined : arr.splice(arr.indexOf(item),1) );
    
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]

//----------------------------------------------------------------------------------------------------------------------------------------------//

let arr = [5, 2, 1, -10, 8];

arr.sort(sortNum);
// solves problem in 1 line arr.sort((a, b) => b - a);
function sortNum(a,b){
    if(a<b) return 1;
    if(a>b) return -1;
    if(a===b) return 0;
}

alert( arr ); // 8, 5, 2, 1, -10

//----------------------------------------------------------------------------------------------------------------------------------------------//

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
    /*let sortedArr = arr.slice(0);
    return sortedArr.sort((a,b) => a.localeCompare(b));
    */ 
   return arr.slice().sort(); // my original solution above, for strings I think its called implicitly or another build in function for strings.
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") ); // -4

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
//alert(powerCalc["*"]());

function Calculator(){
    this.methods={
        '+': (a,b) => a +b,
        '-': (a,b) => a-b,
    },
        this.calculate = function(str){
            let calcArr = str.split(" ");
            return this.methods[calcArr[1]](+calcArr[0],+calcArr[2]);
             

        },
        this.addMethod= function(str,func){
            this.methods[str] = func;

        };
        //calculate: (str) => str.split(" ").forEach((item) =>  ),
        //calculate: calculate => str.split(" ")[3]==="+"? ,

    
}
// this one is super important to understand, its an extendable calculator that can add methods which are stored in the methods object. Also uses this bc its a constructor
// everything is a property of the Calculator which is why its this, even when a function and everything is done inside the methods object to perform calculatons.

//----------------------------------------------------------------------------------------------------------------------------------------------//

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(items => items.name);

alert( names ); // John, Pete, Mary

//----------------------------------------------------------------------------------------------------------------------------------------------//


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({fullName: user.name + " " + user.surname,   id: user.id }));

/*
Please note that in the arrow functions we need to use additional brackets.                     ^ (on each side)
As we remember, there are two arrow functions: without body value => expr and with body value => {...}.

Here JavaScript would treat { as the start of function body, not the start of the object. The workaround is to wrap them in the “normal” brackets like we have above.
*/

/*
usersMapped = [
{ fullName: "John Smith", id: 1 },
{ fullName: "Pete Hunt", id: 2 },
{ fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

//----------------------------------------------------------------------------------------------------------------------------------------------//

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge (arr) {
    arr.sort((a,b) => a.age - b.age);   
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]
console.log(arr);

shuffle(arr);
// arr = [2, 1, 3]
console.log(arr);
shuffle(arr);
// arr = [3, 1, 2]
// ...
console.log(arr);
function shuffle(arr){
    for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

            // swap elements array[i] and array[j]
            // we use "destructuring assignment" syntax to achieve that
            // you'll find more details about that syntax in later chapters
            // same can be written as:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr){
    return  arr.reduce((a,b) => a=== 0 ? a+b.age : (!isNaN(a.age)) ? (+a.age) + (+b.age) : a+b.age , 0) / arr.length;
    // return users.reduce((prev, user) => prev + user.age, 0) / users.length; simpliest solution since prev will be set to 0 (which replaces the first ele)
    // and it will go through every element including the first so no need to worry about the a.age condition only need b since its the result of the previous=(num)
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

function unique(arr) {
    // for(i=0;i<arr.length-1;i++){
    // }
    let uniqueArr = [];
    arr.filter((words, index) => !uniqueArr.includes(words) && ~arr.includes(words) ?uniqueArr.push(words) :index++);
        // above is a trash solution because we are comparing every element of arr to see if its in uniqueArr AND arr, so its like o(n^3) which is super slow
        /*
        this is still a bad, but better optimization since its O(n^2)
        function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
            result.push(str);
            }
        }

        return result;
        }
        */
   return uniqueArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O 

//----------------------------------------------------------------------------------------------------------------------------------------------//

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);
    console.log(usersById);
    function groupById(users){

        return users.reduce((obj,user) =>  { obj[user.id] = user; return obj},{});
        //({id: user.id, name: user.name, age: user.age})   obj[user.id] = user does not work by itself, needs to return object or it will return user(?) and remove the
        //obj[user.id] part and overwrite it with the next user object.
    }
    /*
    // after the call we should have:

    usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */

//----------------------------------------------------------------------------------------------------------------------------------------------//

