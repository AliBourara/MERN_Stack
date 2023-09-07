
function fiveHeads() {
    let headCounter = 0
    let coinFlip = 0
    let attempts = 0

    while(headCounter != 5) {
        coinFlip = Math.floor(Math.random*2)
        if(coinFlip === 1) {
            headCounter++;
        } else {
            headCounter = 0;
        }
        attempts++;
    }
    return new Promise((resolve, reject) => {
        if (attempts > 100){
            reject("you have done 100 attempts")
        }else if(headCounter=== 5){
            resolve("you flipped head 5 time in a row")
        }
    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

console.log("When does this run now?");//this run before fiveHeads()

