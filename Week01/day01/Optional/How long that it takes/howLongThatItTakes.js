//-------1:Prime----------------//


Number.prototype.newIsPrime = function() {
    for( let i=2; i <= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const newStart2 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e5 ) {
    if( num.newIsPrime() ) {
        primeCount++;
    }
    num++;
}
// console.log(`The 100,000th prime number is ${num-1}`);
// console.log(`The function "newIsPrime(100.000)" took ${performance.now() - newStart2} milliseconds to run`);


const newStart3 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {
    if( num.newIsPrime() ) {
        primeCount++;
    }
    num++;
}
// console.log(`The 1,000,000th prime number is ${num-1}`);
// console.log(`The function "newIsPrime(1.000.000)" took ${performance.now() - newStart3} milliseconds to run`);



//-------------------2:Fibonacci----------------

// iterative
const newStartiFib = performance.now();
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);
// console.log(`The function "iFib()" took ${performance.now() - newStartiFib} milliseconds to run`);
// The iterative function will complete in less time than the recursive one


//-------------------------------reverse a string--------------------//

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const newStartReversed1 = performance.now();
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`The function "reversed1" took ${performance.now() - newStartReversed1} milliseconds to run`);

const newStartReversedString = performance.now();
function reverseString(str){
    let splitStr = str.split("")

    // Cuts the "reversing" of the split string by half the iteration.
    for(let i = 0; i < splitStr.length/2; i++){
        let temp = splitStr[i];
        splitStr[i] = splitStr[splitStr.length - 1 - i];
        splitStr[splitStr.length - 1 - i] = temp;
    }

    return splitStr.join("");
}

// console.log(reverseString(story));
// console.log(`The function "reverseString(str)" took ${performance.now() - newStartReversedString} milliseconds to run`);