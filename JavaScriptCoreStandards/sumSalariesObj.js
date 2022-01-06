let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let total=0;
for(prop in salaries){
    console.log(prop);
    total += salaries[prop];
}

alert(total);

// multiply numerics
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  function multiplyNumeric(obj){
      for(let prop in obj){
          if(typeof obj[prop] === 'number'){
            obj[prop] = obj[prop]*2;
          }
      }
  };
  // after the call
  console.log(menu);

  // simple calculator
  let calculator = {
    read(){
        this.x=prompt("x?",'');
        this.y=prompt("y?",'');
    },
    sum(){
        return +this.x + +this.y;
    },
    mul(){
        return +this.x * +this.y;
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// simple chaining to allow multiple function calls back to back, since this looks at what the previous . returned, we need to return this everytime.
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // shows the current step
        alert( this.step );
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();