         "use strict";
         // https://javascript.info/task/counter-inc-dec
 //           function makeCounter() {
            // instead of:
            // let count = 0

            // function counter() {
            //     return counter.count++;
            // };

            // counter.count = 0;

            // counter.set = a => counter.count = a;

            // counter.decrease =  () => counter.count = counter.count-1 ;
            // return counter;
            // }

            //solution with closure

            function makeCounter() {
                let count = 0;

                function counter() {
                    return count++;
                }

                counter.set = value => count = value;

                counter.decrease = () => count--;

                return counter;
                }

            let counter = makeCounter();
            //counter()
           // counter()

            alert( counter() ); //returns 0 but is now 1

            alert( counter.decrease() ); // returns 1 but is now zero
            alert( counter.decrease() ); // returns 0 but is now -1

            alert(counter()); //returns -1 but is now 0

            alert( counter() ); // 0
            alert( counter() ); // 1

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/sum-many-brackets
            function sum(a) {

                let currentSum = a;
    
                function f(b) {
                currentSum += b;
                return f;
                }
    
                f.toString = function() {
                return currentSum;
                };
    
                return f;
                }
            sum(1)(2) == 3; // 1 + 2
            sum(1)(2)(3) == 6; // 1 + 2 + 3
            sum(5)(-1)(2) == 6;
            sum(6)(-1)(-2)(-3) == 0;
            sum(0)(1)(2)(3)(4)(5) == 15;