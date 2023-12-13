function kilometertometer(kilometer){
    return "meters: " + (parseFloat(kilometer)*1000)+ " centimeters" +  (parseFloat(kilometer)*100000);
    }
    function areaofcircle(radius){
    return "Area of the circle is: " + Math.PI*parseFloat(radius)*parseFloat(radius)
    }
    function arthmeticoperationsontwonumbers(numbers){
    nums = numbers.split(",")
    num1 = parseFloat(nums[0])
    num2 = parseFloat(nums[1])
    return ("Sum: "+ (num1+num2) + " Subtraction: " + (num1-num2) + " Multiplication: " + num1*num2 + " Division: "+num1/num2);
    }
    function totalmarksandpercentage(numbers){
    nums = numbers.split(",")
    sub1 = parseFloat(nums[0])
    sub2 = parseFloat(nums[1])
    return "Total Marks: " + (sub1+sub2) + " Percentage of 200 " + ((sub1+sub2)/200)
    }
    function areaandperimeterofarectangle(numbers){
    nums =numbers.split(",")
    breadth = parseFloat(nums[0])
    length = parseFloat(nums[1])
    return "Area of the Rectangle is "+(length*breadth) + " Perimeter of the Rectangle is: "+(2*(length+breadth))
    }
    function averageofNnumbers(numbers){
    nums = numbers.split(",")
    sum = 0
    for (let i=0; i<nums.length;i++){
        sum = sum+parseFloat(nums[i])
    }
    return "Average of given N numbers is: " + (sum/(nums.length))
    }
    function distancebetweentwocities(distance){
    dist = parseFloat(distance)
    return JSON.stringify({
            "InMeters": dist * 1000,
            "InCentimeters": dist * 100000,
            "InFeet": dist * 3280.84,
            "InInches": dist * 3280.84 * 12
        });
    }
    function faranheittocentigrade(temp){
    temp = parseFloat(temp)
    return ""+temp+" faranheit is equal to "+ ((temp-32)*5/9).toFixed(2) + " Centigrade"
    }
    function costanddiscount(numbers){
    nums = numbers.split(",")
    quantity = nums[0]
    cost = nums[1]
    totalcostofproducts = quantity*cost
    totaldiscount = .1*totalcostofproducts
    result = {
        "TotalCostOfProducts":totalcostofproducts,
        "TotalDiscount":totaldiscount,
        "FinalPriceAfterDiscount":totalcostofproducts*.9
    }
    return JSON.stringify(result)
    }
    function simpleinterest(numbers){
    values = numbers.split(",")
    principle = values[0]
    rateofinterest = values[1]
    period = values[2]
    return principle*rateofinterest*period/100
    }
    
    function greaterthan10(number){
        if (number>10){
            console.log(number + " greater than 10")
        }
        else {
            console.log(number + " not greater than 10")
        }
        return "Check console"
    }
    function areyoueligibletodrive(age){
        if (age>=18){
            return "Yes you are eligible to Drive"
        }
        else {
            return 'No you are not ready yet kiddo'
        }
    }
    function whatismygrade(numbers){
        nums = numbers.split(',')
        res = []
    
        for (i=0;i<nums.length;i++) {
                if (90 <= nums[i] && nums[i]<=100){
                    res.push('A');
                }
                else if (75 <= nums[i] && nums[i]<90){
                    res.push("B");
                }
                else if (60<=nums[i] && nums[i]<75){
                    res.push('C');
                }
                else if (0<= nums[i] && nums[i]<60){
                    res.push("F");
                }
                else{
                    res.push(" Enter Valid Number between 0,100")}
    }
    return 'Your Grades for each of the given subjects for the marks ' + numbers + ' are ' + res
    }
    
    function wishmeatmytime(number) {
        now = new Date
        res = ''
        time = now.toTimeString().split(':')[0]
    
        if (time<12){
            if (number >=12){
                res = 'It is Morning man '
            }
            return res + 'Good Morning'
        }
        else if (12 <= time && time<16){
            if (12 > number && number >= 16){
            res = 'It is Afternoon man '
        }
        return res +  "Good Afternoon"
        }
        else if (16<= time && time<21){
            if (22 < number && number < 16){
                res = 'It is Evening man '
            }
            return res + 'Good Evening'
        }
        else {
            if (number<22){
                res = 'It is Night man sleep '
            }
            return res + 'Good Night'
        }
        }
    
    function whichdayistoday(dayNumber) {
        dayNumber = parseInt(dayNumber)
        switch(dayNumber) {
            case 1:
                return 'SUNDAY';
            case 2:
                return 'MONDAY';
            case 3:
                return 'TUESDAY';
            case 4:
                return 'WEDNESDAY';
            case 5:
                return 'THURSDAY';
            case 6:
                return 'FRIDAY';
            case 7:
                return 'SATURDAY';
            default:
                return 'There are only 7 days in a week, man. Please enter a number between 1 and 7.';
        }
    }
    
    function whatisthemonthname(monthnum){
        monthnum = parseInt(monthnum);
        switch(monthnum){
            case 1:
                return 'JANUARY'
            case 2:
                return 'FEBRUARY'
            case 3:
                return 'MARCH'
            case 4:
                return 'APRIL'
            case 5:
                return 'MAY'
            case 6:
                return 'JUNE'
            case 7:
                return 'JULY'
            case 8:
                return 'AUGUST'
            case 9:
                return 'SEPTEMBER'
            case 10:
                return 'OCTOBER'
            case 11:
                return 'NOVEMBER'
            case 12:
                return 'DECEMBER'
            default:
                return 'There are only 12 months asshole, 1-12'
        }
    }
    
    function typeoffruit(size){
        if (0<size&&size<2){
            return 'This fruit comes under tiny category golf pingpong etc'
        }
        else if (2<size&&size<6){
            return 'Okay these size are usually standard cricket Balls'
        }
        else if (6<size&&size<15){
            return 'you can play soccer,basketball,etc'
        }
        else if (size>15){
            return 'You cant play with these man chill out'
        }
        else {
           return  'There wont be fruits in that size'
        }
        }
    
    function templevel(temp){
        if (temp<=10){
            return 'Thats really low for a southiee'
        }
        else if (10<temp&& temp<42){
            return 'This temperature is managable'
        }
        else {
            return 'Thats hot bruh, cant handle it'
        }
    }
    function posnegevod(num){
        if (num==0){
            return 'It is neither positive nor negative neither Even nor ODD'
        }
    
        sign = ''
        cat = ''
        if (num<0){
            sign = 'Negative '
        }
        else if (num>0){
            sign = 'Positive '
        }
        if (num%2 == 0){
            cat = 'Even '
        }
        else if (num%2==1){
            cat = 'Odd '
        }
        return sign + cat + 'Number'
    }
    
    function username(user){
        len = user.length
        if (len<6){
            return 'The length is too short for the username'
        }
        else if (len>6 && len<15){
            return 'Username Accepted'
        }
        else if (len>15){
            return 'Thats too long for a username'
        }
    }

function assignmentoperators(numbers){
    let nums = numbers.split(',')
    num1 = parseFloat(nums[0])
    num2 = parseFloat(nums[1])
    res = {}
    res[`${num1} += ${num2} => ${num1} = ${num1}+${num2}`] = num1+num2
    res[`${num1} -= ${num2} => ${num1} = ${num1}-${num2}`] = num1-num2
    res[`${num1} *= ${num2} => ${num1} = ${num1}*${num2}`] = num1*num2
    res[`${num1} /= ${num2} => ${num1} = ${num1}/${num2}`] = num1/num2
    res[`${num1} %= ${num2} => ${num1} = ${num1}%${num2}`] = num1%num2
    res[`${num1} **= ${num2} => ${num1} = ${num1}**${num2}`] = num1**num2
    res[`${num1} <<= ${num2} => ${num1} = ${num1}<<=${num2}`] = num1<<=num2
    res[`${num1} >>= ${num2} => ${num1} = ${num1}>>=${num2}`] = num1>>=num2
    res[`${num1} >>>= ${num2} => ${num1} = ${num1}>>>=${num2}`] = num1>>>=num2
    res[`${num1} &= ${num2} => ${num1} = ${num1}&${num2}`] = num1&num2
    res[`${num1} ^= ${num2} => ${num1} = ${num1}^${num2}`] = num1^num2
    res[`${num1} |= ${num2} => ${num1} = ${num1}|${num2}`] =num1|num2
    res[`${num1} &&=	 ${num2} => ${num1} = ${num1}&&(${num1}=${num2})`] = num1&&(num1=num2)
    res[`${num1} ||= ${num2} => ${num1} = ${num1}||(${num1}=${num2})`] = num1||(num1=num2)
    res[`${num1} ??= ${num2} => ${num1} = ${num1}??(${num1}=${num2})`] = num1??(num1=num2)
    return JSON.stringify(res).replace(/:/g, ' = ').replace(/,/g, ',   ');
}

function comparetwonumbers(numbers){
    nums = numbers.split(",")
    num1 = parseFloat(nums[0])
    num2 = parseFloat(nums[1])
    if (num1 === num2){
        return 'Both Numbers Are Equal'
    }
    else if (num1>num2){
        return `${num1} is greater than ${num2}`
    }
    else{
        return `${num1} is less than ${num2}`
    }
}

function logicaloperators(num){
    num = 5
    res = {}
    res[`LET ${num} = `] = 5; 
    res[`${num}==8 `] = num==8;
    res[`${num} == 5 `] = num==5;
    res[`${num} == "5" `] = num == '5';
    res[`${num}===5 `] = (num === 5);
    res[`${num}==="5" `] = (num ==='5');
    res[`${num} != 8 `] = (num!=8);
    res[`${num}!==5`] = (num!==5);
    res[`${num}!=="5" `] = (num!=='5');
    res["${num}!==8 "] = (num!==8);
    res[`${num}>8 `] = num>8;
    res[`${num}<8 `] = num<8;
    res[`${num}>=8 `] = num>=8;
    res[`${num}<=8 `] = num<=8;
    return JSON.stringify(res).replace(/:/g, ' = ').replace(/,/g, ',   ');
}
function bitwiseoperations(num){
    num = parseInt(num)
    res = {}
    res[`${num} & 4 `] = num&4;
    res[`${num} | 4 `] = num|4;
    res[`${num} ^ 4 `] = num^4;
    res[`${~num} `] = ~num;
    res[`${num} << 1 `] = num<<1; //It fills zero at the left end of the binary
    res[`${-num} >>1 `] = -num>>1; //it is a sign preserving right shift, if it is 0 it adds 0 if it is 1 it adds 1
    res[`${num} >>>1 `] = num >>> 1; //It is a zero fill right shift which adds zero at the start
    return JSON.stringify(res).replace(/:/g, ' = ').replace(/,/g, ',   ');
}
function ternarycomparision(numbers){
    nums = numbers.split(',')
    num1 = nums[0]
    num2 = nums[1]
    funcstring = `This is now ternanry functions looks like :  ${num1} > ${num2} ? ${num1} is greater than ${num2} : ${num1} is not greater than ${num2} `
    return funcstring + '; And the result is: '+(num1>num2 ? `${num1} is greater than ${num2}` : `${num1} is not greater than ${num2}`)
}
function concatenate(strngs){
    vars = strngs.split(',')
    return vars[0]+vars[1]
}

function Greet(name){
    return console.log('Hello, '+name + '!')
}

function addtwoparams(numbers){
    nums = numbers.split(',')
    num1 = nums[0]
    num2 = nums[1]
    return num1+num2
}

function raiseexpo(numbers){
    nums = numbers.split('')
    base = nums[0]
    expo = nums[1]

    return base**expo
}

function isprime(num){
    if (num <=1){
        return false
    }
    for (i=2;i<=Math.sqrt(num);i++){
        if (num%i==0){
            return false
        }
    }
    return true
}
function scopeofvariables(nums){
    let user = 'me' //it is  a local variable coz it is defined as let, available throughout the function
    car = 'alto' //it is a global variable cause it is not declared but defined, it is lo
    if (true){
        let kum = 'notme'   //it is available only insdie
        user = user+ kum //u can directly use user u dont have to declare, if u declare again and use user it will throw error again.
    }
    return user //if u use kum here it will through an error 
}

function outer(nums){
    nums = parseInt(nums)
    function inner(nums){  //you can write this function out side aswell as a seperate function
        console.log(nums)
    }
    return inner(nums)
}

function factorial(n){
    res = 1
    n = parseInt(Math.abs(n))
    for (i=1;i<n+1;i++){
        res *= i
    }
    return res
}

function h(x){
    x = parseInt(x) //you can write both these inside functions seperately outside aswell
    function f(x){
        function g(x){
            return x*2
        }
        y = g(x)
        return y+2
    }
    return f(x) 
}

function applycallback(numbers){
    nums = numbers.split(',')
    function callback(num){  //write this function outside and pass callback as an argument for applycallback function done
        return num*2
    }
    newnums = nums.map((num) => {
        return callback(num)
    })
    return newnums
}

function oddelements(numbers){
    nums = numbers.split(',')
    newnums = nums.filter((num) => {
        return num%2==1
    })
    return newnums
}

function doubleeachelememnt(numbers){
    nums = numbers.split(',')
    newnums = nums.map((num) => {
        return num*2
    });
    return newnums
}
function converttouppercase(strings){
    strings = strings.split(',')
    newstrings = strings.map((str) => {
        return str.toUpperCase()
    })
    return newstrings
}

function consoledelay(strings){
    setTimeout(() => {console.log(strings)},2000)
    return 'consoled'
}

//writing the file is an asynchronous function so reading after writing should be inside the callback function of writing
function writeandreadfile(){
    fs = require('fs')
    fs.writeFile('sample.txt','hi hello adab',
    function (err){
        if (err){
            return console.log(err)
        }
        else{
         console.log('data written');
    
     fs.readFile('sample.txt',function(err,dataa) {
        if (err){
            return console.log(err)
        }
        return console.log('the data is: '+dataa)

    })}
})
}


function log1to10(num){
    for (i=1;i<11;i++){
        console.log(i)
    }
    return 'check console'
}
function logeven2to20(num){
    for (i=2;i<21;i++){
        if (i%2==0){
            console.log(i)
        }
    }
    return 'check console'
} 
function log110to1(num){
    for (i=10;i>0;i--){
        console.log(i)
    }
    return 'check console'
}

function sum1to5(num){
    sum = Array.from({length:5},(_,i)=>i+1).reduce((accumulator,current)=>{
        return accumulator+current
    })
    return sum
}

function powerof2(n){
    n=0
    while(2**n<=64){
        console.log(`for n = ${n}: `+ 2**n)
        n+=1
    }
}
function guessthenumberunder10(num){
    i = 0
    do{
        i ++;
    }
    while (i !=num)
    console.log('your number is :' + i)
    return i
}

function Multiplicationtable(num){
    for(i=1; i<11; i++) {
        console.log(`${i} x ${num} = `+(i*num))
    }
}

function skip3exit5(){
    for(i=0;i<7;i++){
        if (i==3){
            continue
        }
        if (i==5){
            break
        }
        console.log(i)
    }
}

function fizzbuzz(){

    for(i=1;i<31;i++){
        res = ''
        if (i%3 == 0){
            res += 'Fizz'
        }
        if (i%5 == 0){
            res += 'Buzz'
        }
        if (res == ''){
            res = i
        }
        console.log(res)

    }
}
function numberofprimes(num1,num2){
    count = 0
    for(let i=num1;i<(num2+1);i++){
        if (isprime(i)){
            count +=1
        }
    }
    return count
}

function printparrern1(n){
    res = ''
    for(let i =1;i<n;i++){
        res += '*'
        console.log('*'*i)
    }
}




function changeplaceholder(){
    var funclist = document.getElementById("funclist");
    var selectedFunction = funclist.selectedIndex;
    switch(selectedFunction) {
        case 1 || 2:
            document.getElementById("input").placeholder = "Ex: 23"
            break
        case 3||4:
            document.getElementById("input").placeholder = "10,12"
            break
    
    }
    
    }
    
    function funrun() {
        var funclist = document.getElementById("funclist");
        var selectedFunction = funclist.options[funclist.selectedIndex].value;
        var inputValue = document.getElementById("input").value;
        const functionsMap = {
            "kilometertometer": kilometertometer,
            "areaofcircle": areaofcircle,
            "ArthimeticOperations": arthmeticoperationsontwonumbers,
            "TotalMarksandPercentage": totalmarksandpercentage,
            "areaandperimeterofarectangle": areaandperimeterofarectangle,
            "averageofNnumbers": averageofNnumbers,
            "distancebetweentwocities": distancebetweentwocities,
            "faranheittocentigrade": faranheittocentigrade,
            "costanddiscount": costanddiscount,
            "simpleinterest": simpleinterest,
            "greaterthan10": greaterthan10,
            "areyoueligibletodrive": areyoueligibletodrive,
            "whatismygrade": whatismygrade,
            "wishmeatmytime": wishmeatmytime,
            "whichdayistoday": whichdayistoday,
            "whatisthemonthname": whatisthemonthname,
            "typeoffruit": typeoffruit,
            "templevel": templevel,
            "posnegevod": posnegevod,
            "username": username,
            "assignmentoperators": assignmentoperators,
            "comparetwonumbers": comparetwonumbers,
            "logicaloperators": logicaloperators,
            "bitwiseoperations": bitwiseoperations,
            'bitwiseoperations':bitwiseoperations,
            'ternarycomparision':ternarycomparision,
            'concatenate':concatenate,
            "log1to10":log1to10
          };
          
          if (functionsMap[selectedFunction]) {
            document.getElementById('result').textContent = functionsMap[selectedFunction](inputValue);
          } else {
            console.log('Function not found');
          }
            }
    