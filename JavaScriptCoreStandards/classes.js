//----------------------------------------------------------------------------------------------------------------------------------------------//

//https://javascript.info/task/rewrite-to-class

class Clock{
    constructor({ template }){
        this.template= template;
    }
    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };
    render = () =>  {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
        
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/class-constructor-error

            class Animal {

                constructor(name) {
                    this.name = name;
                }

            }

                class Rabbit extends Animal {
                    constructor(name) {
                        super(name);
                        //this.name = name; old code, added super before it because u must call the super constructor before using this.
                        this.created = Date.now();
                    }
                }

                let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined, ok now after super fix
                alert(rabbit.name);

//----------------------------------------------------------------------------------------------------------------------------------------------//

//clock.js and extended clock for task 2

//----------------------------------------------------------------------------------------------------------------------------------------------//

            //https://javascript.info/task/class-extend-object

            class Rabbit extends Object {
                constructor(name) {
                    super();
                    this.name = name;
                }
                }
    
                let rabbit = new Rabbit("Rab");
    
                alert( rabbit.hasOwnProperty('name') ); // Error

//----------------------------------------------------------------------------------------------------------------------------------------------//

//https://javascript.info/task/format-error
class FormatError extends SyntaxError{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

//----------------------------------------------------------------------------------------------------------------------------------------------//