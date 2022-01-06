"use strict";

            //https://javascript.info/task/output-numbers-100ms

            //printNumbers(2,4);
            //printNumbers(1,7);
            printNumbers(10,2);

            // set interval solution
             function printNumbers(from,to){
                 if(from<=to){let timerID = setInterval(()=> {if(from <= to){console.log(from++)} else clearInterval(timerID)});}

                 else{
                    let timerID = setInterval(()=> {if(from >= to){console.log(from--)} else clearInterval(timerID)});
                 }
             }

            // nested setTimeout solution
            // function printNumbers(from,to){
            //     if(from >= to){
            //         let timerID = setTimeout(function run(){
            //             if(from >= to){
            //             console.log(from--);
            //             setTimeout(run);
            //             }
            //             clearTimeout(timerID);
            //         });
            //         //setTimeout(() =>  {while(from>=to){console.log(from); setTimeout(printNumbers(--from,to))} clearTimeout(timerID)})
            //     }
            //     else{
            //         let timerID = setTimeout(function run(){
            //             if(from <= to){
            //             console.log(from++);
            //             setTimeout(run);
            //             }

            //             clearTimeout(timerID);
            //         });
            //     }
            //}

//----------------------------------------------------------------------------------------------------------------------------------------------//

