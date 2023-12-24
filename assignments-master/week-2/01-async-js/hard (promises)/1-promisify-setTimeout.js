/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    prom = new Promise((resolve) => {
        setTimeout(() => 
        {console.log('hij');
    resolve()},
        n*1000)}
        )
    return prom

}
module.exports = wait;
