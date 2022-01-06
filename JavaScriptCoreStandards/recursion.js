//----------------------------------------------------------------------------------------------------------------------------------------------//
//https://javascript.info/task/sum-to
"use strict";
            console.log(sumTo(1)); //= 1
            console.log(sumTo(2)); //= 2 + 1 = 3
            console.log(sumTo(3)); //= 3 + 2 + 1 = 6
            console.log(sumTo(4)); //= 4 + 3 + 2 + 1 = 10
            
            console.log(sumTo(100)); //= 100 + 99 + ... + 2 + 1 = 5050
            console.log(sumTo(100000));

             // loop variation
             /*
            function sumTo(n){
                let sum =0;

                for(let i =1; i<=n ; i++){
                    sum+= i;
                }

                return sum;
            }
            */

           // recursive variation slowest because it has to recall each time for each number which takes up a lot of memory and has a limit to the number it can go to
           /*
           function sumTo(n){
            if(n==1) return n;

            else{
                return n + sumTo(n-1);
            }

           }
           */
          // arithmetic progression solution fastest since solving directly with no loops or recalling of function
          
          function sumTo(n){
              if(n==1) return n;

              return (n*(1+n))/2;
          }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/factorial

            alert( factorial(5) );
            function factorial(n){
                if(n==1) return n;
                return n* factorial(n-1);
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/fibonacci-numbers

            alert(fib(3)); // 2
            alert(fib(7)); // 13
            alert(fib(77)); // 5527939700884757

            //fibonacci with recursion (super slow thus far with large numbers)
            // function fib(n){
            //     if(n<=1) return n;

            //     return fib(n-1) + fib(n-2);
            // }

            //fibonacci with loop
            function fib(n) {
                let a = 1;
                let b = 1;
                for (let i = 3; i <= n; i++) {
                    let c = a + b;
                    a = b;
                    b = c;
                }
                return b;
                }

//----------------------------------------------------------------------------------------------------------------------------------------------//

let list = {
    value: 1,
    next: {
        value: 2,
            next: {
            value: 3,
                next: {
                    value: 4,
                    next: null
                }
        }
}};

printList(list);

//recursive, better because if we add or remove objects it wont have issues
// function printList(list){
//     alert(list.value); // output the current item
    
//     if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//     }
// }

//loop version
function printList(list){
    let tmp = list;

    while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
    };

    printReverseList(list);
    
    // recursive solution
    // function printReverseList(list){
    //     let temp = list;

    //     temp.next == null ? console.log(temp.value) : (printReverseList(temp.next),console.log(temp.value));
        
    // }

    //another recursive sol:
    // if (list.next) {
    //     printReverseList(list.next);
    // }

    // alert(list.value);


    //loop solution
    function printReverseList(list){
        let temp = list;
        let reverseArr = [];
        
            while(temp){
                reverseArr.push(temp.value);
                temp = temp.next;
            }

            reverseArr.reverse();
        for(let num of reverseArr){
            console.log(+num);
        }
    }

//----------------------------------------------------------------------------------------------------------------------------------------------//

//closure / variable scope with lexical environment (each new function creates a new lexical environment with a reference to the one that called it and theres always the global)

function sum(a){

    return function sum(b){
        return a +b; // takes "a" from the outer lexical environment
    }
};

alert(sum(1)(2));
alert(sum(5)(-1));

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/filter-through-function

            let arr = [1, 2, 3, 4, 5, 6, 7];

            alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

            alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

            function inBetween(a,b){

                return item => (item >=a && item <=b);

            }

            function inArray(arr){

                return item => arr.includes(item);
                
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/sort-by-field

            let users = [
                { name: "John", age: 20, surname: "Johnson" },
                { name: "Pete", age: 18, surname: "Peterson" },
                { name: "Ann", age: 19, surname: "Hathaway" }
            ];

            alert(JSON.stringify(users.sort(byField('name'))));
            alert(JSON.stringify(users.sort(byField('age'))));


            function byField(fieldName){
                
                return ((a, b) => a[fieldName] > b[fieldName] ? 1 : -1);
                
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/make-army

            function makeArmy() {
                let shooters = [];
    
                let i = 0;
                while (i < 10) {
                    let j = i;
                    let shooter = function() { // create a shooter function,
                        alert(j); // that should show its number
                    };
                    shooters.push(shooter); // and add it to the array
                    i++;
                }
    
                // ...and return the array of shooters
                return shooters;
                }
    
                let army = makeArmy();
    
                // all shooters show 10 instead of their numbers 0, 1, 2, 3...
                army[0](); // 10 from the shooter number 0
                army[1](); // 10 from the shooter number 1
                army[2](); // 10 ...and so on.

//----------------------------------------------------------------------------------------------------------------------------------------------//

