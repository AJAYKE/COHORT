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
    if (inputValue !== '') {
        switch(selectedFunction){
            case "kilometertometer":
                document.getElementById("result").textContent = kilometertometer((inputValue));
                break
            case "areaofcircle":
                document.getElementById("result").textContent=areaofcircle(inputValue);
                break
            case "ArthimeticOperations":
                document.getElementById("result").textContent = arthmeticoperationsontwonumbers(inputValue);
                break
            case "TotalMarksandPercentage":
                document.getElementById("result").textContent = totalmarksandpercentage(inputValue);
                break
            case "areaandperimeterofarectangle":
                document.getElementById("result").textContent = areaandperimeterofarectangle(inputValue);
                break
            case "averageofNnumbers":
                document.getElementById("result").textContent = averageofNnumbers(inputValue);
                break
            case "distancebetweentwocities":
                document.getElementById("result").textContent = distancebetweentwocities(inputValue);
                break
            case "faranheittocentigrade":
                document.getElementById("result").textContent = faranheittocentigrade(inputValue);
                break
            case "costanddiscount":
                document.getElementById("result").textContent = costanddiscount(inputValue);
                break
            case "simpleinterest":
                document.getElementById("result").textContent = simpleinterest(inputValue);
                break
            case 'greaterthan10':
                document.getElementById('result').textContent = greaterthan10(inputValue);
                break
            case 'areyoueligibletodrive':
                document.getElementById('result').textContent = areyoueligibletodrive(inputValue);
                break
            case 'whatismygrade':
                document.getElementById('result').textContent = whatismygrade(inputValue);
                break
            case 'wishmeatmytime':
                document.getElementById('result').textContent = wishmeatmytime(inputValue);
                break
            case 'whichdayistoday':
                document.getElementById("result").textContent = whichdayistoday(inputValue);
                break
            case 'whatisthemonthname':
                document.getElementById('result').textContent = whatisthemonthname(inputValue);
                break
            case 'typeoffruit':
                document.getElementById('result').textContent = typeoffruit(inputValue);
                break
            case 'templevel':
                document.getElementById("result").textContent = templevel(inputValue);
                break;
            case 'posnegevod':
                document.getElementById('result').textContent = posnegevod(inputValue);
                break;
            case 'username':
                document.getElementById('result').textContent = username(inputValue);
                break;
            default:
                document.getElementById("result").textContent = "Please enter a valid number";
            }
}
}
