"use strict";

let user = {
    name: "John"
};

function wrap(target) {
return new Proxy(target, {
    get(target, property, receiver){
        if (property in target) {
            return Reflect.get(target, property, receiver);
        } else {
            throw new ReferenceError(`Property doesn't exist: "${property}"`)
            }
        }
    });
}


user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist: "age"

//----------------------------------------------------------------------------------------------------------------------------------------------//

let array = [1, 2, 3];

array = new Proxy(array, {
get(target, prop, receiver){
    if(prop < 0 ){
        return Reflect.get(target,+target.length + +prop,receiver);
    }
    return Reflect.get(target,prop,receiver);
}
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2
alert( array[1] ); // 

// Other array functionality should be kept "as is"

//----------------------------------------------------------------------------------------------------------------------------------------------//

let handlers = Symbol('handlers');
            
function makeObservable(target) {

    // 1. Initialize handlers store
    target[handlers] = [];

    // Store the handler function in array for future calls
    target.observe = function(handler) {
        this[handlers].push(handler);
    };

    // 2. Create a proxy to handle changes
    return new Proxy(target, {
        set(target, property, value, receiver) {
        let success = Reflect.set(...arguments); // forward the operation to object
        if (success) { // if there were no error while setting the property
            // call all handlers
            target[handlers].forEach(handler => handler(property, value));
        }
        return success;
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});

user.name = "John"; // alerts: SET name=John