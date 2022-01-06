"use strict";
let date = new Date(Date.parse("2012-01-20T03:12:00.000"));
//two other ways to make that date:
//let d1 = new Date(2012, 1, 20, 3, 12);
//let d2 = new Date("February 20, 2012 03:12:00");
alert(date);


//----------------------------------------------------------------------------------------------------------------------------------------------//

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"
date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR
function getWeekDay(date){
    let weekDay = date.getDay();
    return weekDay === 0 ? "SU" : weekDay === 1 ? "MO" : weekDay === 2 ? "TU" : weekDay === 3 ? "WE" : weekDay === 4 ? "TH" : weekDay === 5 ? "FR" : "SA";

    // another solution
    //  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    //  return days[date.getDay()]; works bc we are accessing an array with the weekday which is ordered by number so it will always work.
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

let date = new Date(2012, 0, 1);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(date){
    
    if(date.getDay() === 0) return 7;
    return date.getDay();
}

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/get-date-ago
            let date = new Date(2015, 0, 2);

            alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
            alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
            alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

            function getDateAgo(date, days){
                let tempDate = new Date(date);
                tempDate.setDate(tempDate.getDate()-days);
                return tempDate.getDate();
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            // https://javascript.info/task/last-day-of-month
            let date = new Date(2015, 2, 2);

            alert(getLastDayOfMonth(date.getFullYear(), date.getMonth()));
            alert(getLastDayOfMonth(2012, 1));

            function getLastDayOfMonth(year, month){
                let tempDate = new Date(year, month);
                return tempDate.getDate(tempDate.setDate(tempDate.getDate()-tempDate.getDate(tempDate.setMonth(tempDate.getMonth()+1))));
                
                //much simpler solution by creating a date with the next month, and setting date as zero which will go back 1 day.
                //let date = new Date(year, month + 1, 0); return date.getDate();
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            // https://javascript.info/task/get-seconds-today
            alert(getSecondsToday());

            function getSecondsToday(){
                let date = new Date();
                return date.getSeconds() + (date.getMinutes() * 60) + (date.getHours() * 60 * 60);
            }
            /*
            another solution
                let now = new Date();

                // create an object using the current day/month/year
                let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

                let diff = now - today; // ms difference
                return Math.round(diff / 1000); // make seconds
            */

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/get-seconds-to-tomorrow
            alert(getSecondsToTomorrow());

            function getSecondsToTomorrow(){
                let now = new Date();

                let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24,0,0); 
                //let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1); also works for next day (hours min seconds milisecs set to 0)
                //is a better solution since it should take care of countries with daylight savings time where days have 23 or 25 hours

                return Math.round((tomorrow - now)/1000);
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            // https://javascript.info/task/format-date-relative
            alert( formatDate(new Date(new Date - 1)) ); // "right now"

            alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

            alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

            // yesterday's date like 31.12.16 20:00
            alert( formatDate(new Date(new Date - 86400 * 1000)) );

            function formatDate(date){
                let diff = Date.now()-date.getTime();
                
                if(diff< 1000) return "right now";

                else if(diff >=1000 && diff < 60000) return `${diff/1000} sec. ago`;

                else if(diff >= 60000 && diff <3.6e+6) return `${diff/60000} min. ago`;

                return `${date.getDate()}.${date.getMonth()}.${String(date.getFullYear()).split("").slice(2).join("")} ${date.getHours() <10 ? 0 +String(date.getHours()):date.getHours()}:${date.getMinutes() <10 ? 0 +String(date.getMinutes()):date.getMinutes()}`;
            /*
            better solution for the final return since I would need to use the ? operator for every one that can have a single digit (date, month, hours, min)
             let d = date;
            d = [
                '0' + d.getDate(),
                '0' + (d.getMonth() + 1),
                '' + d.getFullYear(),
                '0' + d.getHours(),
                '0' + d.getMinutes()
            ].map(component => component.slice(-2)); // take last 2 digits of every component

            // join the components into date
            return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
            */
            }

//----------------------------------------------------------------------------------------------------------------------------------------------//

