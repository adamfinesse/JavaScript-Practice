            "use strict";
            //alert( Math.round((6.35*10))/10); // 6.3
            //alert((6.35*10).toFixed(0)/10 ); // 6.3

            // function readNumber(){
            //     let num;
            //     while(!isFinite(num)||isNaN(num)){
            //         num = parseInt(prompt("input a number",''));
            //         alert(num);
            //     } 
            //     console.log(`${num}`);
            //     return readNumber;
            // }
            // readNumber();

            // function random(min,max){
            //     return min+Math.random()*(max-min);
            // }
            // alert( random(1, 5) ); // 1.2345623452
            // alert( random(2, 5) ); // 3.7894332423
            // alert( random(1, 5) ); // 4.3435234525
            // function randomInteger(min,max){
            //     return Math.round((min - 0.5 + Math.random()* max - min + 1));
            // }
            // alert( randomInteger(1, 5) ); // 1
            // alert( randomInteger(1, 5) ); // 3
            // alert( randomInteger(1, 5) ); // 5

            function ucFirst(str){
                if(!str) return str;

                str = str[0].toUpperCase() +str.slice(1);

                return str;
            }
            console.log(ucFirst('john'));
            console.log(ucFirst('johnyyynoi'));
            console.log( ucFirst('yamuv'));

            function checkSpam(str){
                let tempStr = str.toLowerCase();
                if(!str) return false;

                if(tempStr.includes("viagra" )|| tempStr.includes("xxx")){
                    return true;
                }
                return false;
            }
            console.log(checkSpam('buy ViAgRA now') == true);
            console.log(checkSpam('free xxxxx') == true);
            console.log(checkSpam("innocent rabbit") == false);
            console.log(checkSpam("") == false);

            function truncate(str,maxlength){
                if(str.length > maxlength){
                    return str.slice(0,maxlength-1)+"…";
                }
                return str;
            }
            console.log(truncate("What I'd like to tell on this topic is:", 20));
            console.log(truncate("Hi everyone!", 20));

            function extractCurrencyValue(str){
                str = str.slice(1,str.length);
                return parseInt(str);
                // or just 1 line return +str.slice(1);
            }
            alert( extractCurrencyValue('$120') === 120 );