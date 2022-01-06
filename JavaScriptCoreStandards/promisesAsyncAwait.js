"use strict";

//https://javascript.info/task/delay-promise

function delay(ms) {
    return new Promise(function(resolve){
        setTimeout(resolve,ms);
    })
}

delay(3000).then(() => alert('runs after 3 seconds'));

//----------------------------------------------------------------------------------------------------------------------------------------------//

 //https://javascript.info/task/rewrite-async
            
            // function loadJson(url) {
            //     return fetch(url)
            //         .then(response => {
            //         if (response.status == 200) {
            //             return response.json();
            //         } else {
            //             throw new Error(response.status);
            //         }
            //         });
            //     }
                
            async function loadJson(url){
                try {
                    let response = await fetch(url); 
                    if (response.status!= 200) throw new Error(response.status);
                    let responseJson = await response.json();

                    return JSON.stringify(responseJson);
                } catch (error) {
                    alert(error);
                }
        }

        /* better solution since it checks for the only good response 200 and builds json and returns it
        async function loadJson(url) { // (1)
            let response = await fetch(url); // (2)

            if (response.status == 200) {
                let json = await response.json(); // (3)
                return json;
            }

            throw new Error(response.status);
            }
        */

            loadJson('no-such-user.json')
            //.catch(alert)
            loadJson("https://javascript.info/article/promise-chaining/user.json").then(alert)
            //.catch(alert); // Error: 404


        //loadJson("")

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/rewrite-async-2

            class HttpError extends Error {
                constructor(response) {
                    super(`${response.status} for ${response.url}`);
                    this.name = 'HttpError';
                    this.response = response;
                    //console.log(this instanceof HttpError);
                }
                }

                async function loadJson(url){
                    let response = await fetch(url);
                    if(response.status == 200){
                        let json = await response.json();
                        return json;
                    } 

                    throw new HttpError(response);
                }
                
                async function demoGithubUser(){

                    let user;
                    while(1){
                        let name = prompt("Enter a name?", "adamfinesse");
                        try { // if not in try catch error becomes unhandled,
                            user = await loadJson(`https://api.github.com/users/${name}`); 
                            break; // no error, exit loop
                            // for some reason i could console.log error here? even though its in the input to catch.
                        } catch (err) {
                            if (err instanceof HttpError && err.response.status == 404) {
                                // loop continues after the alert
                                alert("No such user, please reenter.");
                            } else {
                                // unknown error, rethrow
                                throw err;
                            }
                        }
                            
                    }
                
                    alert(`Full name: ${user.name}.`);
                    return user;
                }
                demoGithubUser();

                //old code
                // function loadJson(url) {
                // return fetch(url)
                //     .then(response => {
                //     if (response.status == 200) {
                //         return response.json();
                //     } else {
                //         throw new HttpError(response);
                //     }
                //     });
                // }

                // Ask for a user name until github returns a valid user
                // function demoGithubUser() {
                // let name = prompt("Enter a name?", "iliakan");

                // return loadJson(`https://api.github.com/users/${name}`)
                //     .then(user => {
                //     alert(`Full name: ${user.name}.`);
                //     return user;
                //     })
                //     .catch(err => {
                //     if (err instanceof HttpError && err.response.status == 404) {
                //         alert("No such user, please reenter.");
                //         return demoGithubUser();
                //     } else {
                //         throw err;
                //     }
                //     });
                // }

//----------------------------------------------------------------------------------------------------------------------------------------------//

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
    }

function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
    wait().then(result => alert(result)); // works because asyc returns a promise that wraps the number, so we can naturally call .then on it
    /* 
    function wrapping example

    (async () => {
        let result = await wait();
        console.log(result);
    })();

    */
}
f();

//----------------------------------------------------------------------------------------------------------------------------------------------//

