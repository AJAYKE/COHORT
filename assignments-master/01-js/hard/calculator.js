/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result=0){
    this.res = result
    this.chars = '+-*/().'
  }
  add(num){
    this.res += num
  }
  subtract(num){
    this.res-=num
  }
  multiply(num){
    this.res*=num
  }
  divide(num){
    if (num ===0){
      throw new Error('Error')
    }
    this.res/= num
  }
  clear(){
    this.res =0
  }
  getResult(){
    return this.res
  }
  calculate(str) {
    let equ = ''
    let invalid = ''
    let openb = []
    let closeb = []
    let j = 0
    str.split('').forEach(st => {
      if (/\d/.test(st) || this.chars.includes(st)) {
        equ+=(st)
        if (st === '('){
          openb.push(j)
        }
        else if (st === ')'){
          closeb.push(j)
        }
        j += 1
      }
      else if (st !=' '){
        invalid += st + ' '
      }
    })

    if (invalid.length > 0){
      throw new Error('Invalid Characters in the equation: '+invalid )
    }
    
    if (openb.length === closeb.length){
      for (let i in openb){
        if (closeb[i]<=openb[i]){
          throw new Error('close the brackets properly' ) 
        }
      }
    }
    else{
      throw new Error('close the brackets properly' )
    }
    if (equ.includes('/0')){
      throw new Error('Invalid Expression')
    }
    this.res = eval(equ)
    return this.res
  }
  
}

module.exports = Calculator;
