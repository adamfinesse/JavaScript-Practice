'use strict';
let num = prompt('enter start number to find primes below it','');
NextPrime: for(let i =2;i<=num;i++){
    for(let j = 2;j<i;j++){
        if(i%j==0){
            continue NextPrime;
    }
}
    alert(i);
//alert(`wtf ${i}`);
}