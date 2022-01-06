            //https://javascript.info/task/settimeout-result

            function work(a, b) {
                alert( a + b ); // work is an arbitrary function or method
                }

                work = spy(work);

                work(1, 2); // 3
                work(4, 5); // 9

                for (let args of work.calls) {
                alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
                }

                function spy(func){
                    wrapper.calls = [];
                     function wrapper(...args){

                        wrapper.calls.push(args);
                        return func.apply(this, args);

                    }
                    return wrapper;
                }

                function hash(args){
                    return [].join.apply(args);
                }

//----------------------------------------------------------------------------------------------------------------------------------------------//

function f(x) {
    alert(x);
    }

    // create wrappers
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);

    f1000("test"); // shows "test" after 1000ms
    f1500("test"); // shows "test" after 1500ms

    function delay(func,delay){
        
        return function() {
                setTimeout(() => func.apply(this, arguments), delay);
            };
    }

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/debounce

            let f = debounce(alert, 1000);

            f("a");
            setTimeout( () => f("b"), 200);
            setTimeout( () => f("c"), 500);

            function debounce(func,ms){
                let timerID = [];
                let wrapper = function(){
                    if(timerID.length>0) clearTimeout(timerID.shift());
                    timerID.push(setTimeout(func,ms,...arguments));
                    //setTimeout(()=> func,ms,...arguments);
                }
                return wrapper;
            }
            // better way to solve debounce:
            /*
            function debounce(func, ms) {
                let timeout;
                return function() {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, arguments), ms);
                };
                }
            */

//----------------------------------------------------------------------------------------------------------------------------------------------//

function f(a) {
    console.log(a);
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);

f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

function throttle(f,ms){
    let interval;
    return function(){
        if(interval=== undefined){
            interval= setTimeout(f.apply(this,arguments),ms);
        }

         //else{
            clearTimeout(interval);
            interval= setTimeout(()=>f(...arguments),ms);
         //}

    }
    /* better solution to throttle?
    function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
        }
        isThrottled = true;

        func.apply(this, arguments); // (1)

        setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }
        }, ms);
    }

    return wrapper;
    }
    */
}
//----------------------------------------------------------------------------------------------------------------------------------------------//

//working with binds

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// other solution without bind but less reliable bc user var might change after askPassword but before visitor answers and calls the 2 functions.
// askPassword(() => user.loginOk(), () => user.loginFail());

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/ask-partial
            
            function askPassword(ok, fail) {
                let password = prompt("Password?", '');
                if (password == "rockstar") ok();
                else fail();
            }

            let user = {
                name: 'John',

                login(result) {
                    alert( this.name + (result ? ' logged in' : ' failed to log in') );
                }
            };

            askPassword(user.login.bind(user,true), user.login.bind(user,false)); // or askPassword(() => user.login(true), () => user.login(false));