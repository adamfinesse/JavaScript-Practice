"use strict";
let user = {
name: "John",
years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//----------------------------------------------------------------------------------------------------------------------------------------------//

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

    function topSalary(salaries){
        let topSal = 0;
        let topPaid = null;
        Object.entries(salaries).forEach(element => element[1] > topSal ? (topPaid = element[0],topSal = element[1]) : element);
        return topPaid;

        /* alternative solution to topSalary which is readable and more efficient as it doesnt use that : element part and a much simpler check using destructuring.
            let maxSalary = 0;
            let maxName = null;

            for(const [name, salary] of Object.entries(salaries)) {
                if (maxSalary < salary) {
                maxSalary = salary;
                maxName = name;
                }
            }

            return maxName;
        */
    }
    alert(topSalary(salaries));

//----------------------------------------------------------------------------------------------------------------------------------------------//

