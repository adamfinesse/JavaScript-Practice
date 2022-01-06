//----------------------------------------------------------------------------------------------------------------------------------------------//
//https://javascript.info/task/array-unique-map
function unique(arr) {
    let tempSet = new Set(arr);
    let uniqueArr = [];

    for(let unique of tempSet){
        uniqueArr.push(unique);
    }
    return uniqueArr;
    // better solution in 1 line: return Array.from(new Set(arr));
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert( unique(values) ); // Hare, Krishna, :-O

//----------------------------------------------------------------------------------------------------------------------------------------------//
// time complexity of this is o(n) maybe a little more but def a easy solution since it adds the string with the sorted string which is the same for all anagrams that contain
// the same characters.
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr){
    let map = new Map();
    for(let string of arr){
        //let tempString = string.toLowerCase().split("").sort(sorter).join("");
        map.set(string.toLowerCase().split("").sort().join(""),string);
    }

    return Array.from(map.values());
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

    let salaries2 ={

    };
    alert( sumSalaries(salaries) ); // 650
    alert( sumSalaries(salaries2) );
    function sumSalaries(salaries){
        return Object.values(salaries).reduce((initial, value) => initial+value,0);
    }

//----------------------------------------------------------------------------------------------------------------------------------------------//

let user = {
    name: 'John',
    age: 30
    };

    alert( count(user) ); // 2

    function count(user){
        return Object.keys(user).length;
    }

//----------------------------------------------------------------------------------------------------------------------------------------------//

