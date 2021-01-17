// <<<<<<<<<<<<<<<<<<<<<<<<<<Assignment#14>>>>>>>>>>>>>>>>>>>>>>>>>>>
// '''''''''''''''''chapter 31  to   34''''''''''''''


// ..................tsk#01..................

var currentTime = new Date();
document.write(currentTime);


// ..................tsk#02..................

var months  =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var currentMonth = new Date();
document.write("The current month is " + ":"+  " "+ months[currentMonth.getMonth()]);


// ..................tsk#03..................


var Days  =  ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDay = new Date();
document.write("The current day is " + ":"+  " "+ Days[currentDay.getDay()].slice(0,3));


// ..................tsk#04..................

var currentDate = new Date();
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day" + ":"+  " "+c)
}else if(c === "Sun"){
    document.write("It's Fun Day" + ":"+  " "+c)
}else if(c === "Mon"){
    document.write(c)
}else if(c === "Tue"){
    document.write(c)
}else if(c === "Wed"){
    document.write(c)
}else if(c === "Thr"){
    document.write(c)
}else if(c === "Fri"){
    document.write(c)
}


// ..................tsk#05..................


var today = new Date();

var date = today.getDate();
if(date<16){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}



// ..................tsk#06..................

var a = new Date(); 
var b = new Date(); a.setFullYear(1970, 1);
var c = b-a;
var d = a/1000;
document.write("Current Date is"+":"+a  +"<br>" + "Elapsed millisecond since jan 1 1970 is" +":"+c +"<br>" + "Elapsed minutes since jan 1 1970 is" +":"+d);

// ..................tsk#07..................



var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c >= "12:"){
    document.write("It's PM")
}
else if(c <= "12:"){
    document.write("It's AM")
}


// ..................tsk#08..................

var d = new Date(); d.setFullYear(2020, 12, 0);
document.write("later Date"+":"+d)



// ..................tsk#09..................



var date1 = new Date(2015,4,18); 
var date2 = new Date(); 
var Difference_In_Time = date2.getTime() - date1.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
document.write(Difference_In_Days + " " +"days have passed since 1st ramadan, 2015 " );



// ..................tsk#10..................

var a = new Date(2015);
var b = new Date(2015,12,0);
var difference = (b - a) / 1000;

document.write("on refrence date  "  + " " + b + " " + difference + " seconds had passed since begging of 2015");



// ..................tsk#11..................


var currentTime = new Date();
var timeOneHourlater = new Date();
     timeOneHourlater.setHours(timeOneHourlater.getHours() -1 );
document.write("current time is:"+" "+currentTime+"<br>"+ "Time one hour ago was:"+ " "+timeOneHourlater)
         


// ..................tsk#12..................


var currentTime = new Date();
var d = new Date();
d.setFullYear(d.getFullYear() - 100); 
document.write("current time is:"+" "+currentTime+"<br>"+ "time hundrad years back:"+ " "+d)


// ..................tsk#13..................


var enterAge = prompt("enter your age");
var currentYear = new Date();
currentYear.setFullYear(currentYear.getFullYear() - enterAge);
var yourBirthYear = currentYear.getFullYear();
document.write(" Your birth year is:"+" "+yourBirthYear);



// ..................tsk#14..................

var numberOfUnits = prompt("enter number of unites used")
var chargePerUnit = prompt(" enter cahrge per unit")
document.write("<h1>K-Electric bill</h1>");
document.write("<h1>Mr. Saif Ullah</h1>");
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()];
document.write(monthName +"<br>");
document.write("number of unites is:" +" "+numberOfUnits );
document.write("<br>cahrge per unit:" +" "+ chargePerUnit);
var payaleAmount = (numberOfUnits*chargePerUnit);
document.write(" <br>Net Amount Payable (within Due Date):" +" "+  payaleAmount);
document.write("<br>Late payment Surcharges:" +" "+ 400);
var grossAmount = payaleAmount+400;
document.write("<br>Gross Amount Payable (After Due Date):" +" "+ grossAmount );






// '''''''''''''''''chapter 35  to   38''''''''''''''


// ..................tsk#1..................


function tellTime() {
     var now = new Date(); 
     document.write("Current time: "+ now);
     }

     tellTime();



// ..................tsk#02..................


function greeting(){
    var  firstName = prompt("Enter your first name")
    var  lastName = prompt("Enter your last name")
    document.write("Hi! how are you:" + "" +firstName +lastName);
}
    greeting()



// ..................tsk#03..................

function add(){
    var  firstNum = +prompt("Enter your first number")
    var  secondNum = +prompt("Enter your second number")
    var addition = firstNum +secondNum;
    document.write("After addition:" + "" +addition);
}
    add()


// ..................tsk#04..................



function caiculator(){
       var  firstNum = +prompt("Enter your first number")
       var  enterOperator = prompt("Enter operator")
       var  secondNum = +prompt("Enter your second number")
    if (enterOperator==="*") {
        var multiply = firstNum*secondNum;
      document.write(multiply)
    } 
    if (enterOperator==="/") {
        var divide = firstNum/secondNum;
      document.write(divide)
    } 
    if (enterOperator==="+") {
        var add = firstNum+secondNum;
      document.write(add)
    } 
    if (enterOperator==="-") {
        var minus = firstNum-secondNum;
      document.write(minus)
    } 
}
    calculator()



// ..................tsk#05..................


function square(a,b){
    var a = prompt("enter value of a");
    var b = prompt("enter value of a");
    var squaringA = a*a;
    var squaringB = b*b;
    document.write("square of a is:"+" "+squaringA+ "<br>"+"square of b is:"+" "+squaringB)
}

square();



// ..................tsk#06..................



function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 5;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);



// ..................tsk#07..................


function counting()
{
    var FirstNumber = prompt("enter first number")
    var SecondNumber = prompt("enter last number")
    for (var i = FirstNumber; i <= SecondNumber; i++) {
        document.write(i);
     }
}
counting();

// ..................tsk#08..................




function pythagorean(){
    var sideA = prompt("enter value of sideA")
  var sideB = prompt("enter value of sideB")
    var answer = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    document.write(answer);
  }
  pythagorean()
  


// ..................tsk#09..................



var length = +prompt("Enter a whole number for the length of your rectangle.");
var width = +prompt ("Enter a whole number for the width of your rectangle.");

function area () {
var answer =  length * width;
console.log("The area of your rectangle is " + answer)
}
area()

// ..................tsk#10..................

function check_Palindrome(str_entry){
  
     var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount = 0;
  
    if(cstr==="") {
      console.log("Nothing found!");
      return false;
    }
  
    if ((cstr.length) % 2 === 0) {
      ccount = (cstr.length) / 2;
    } else {

      if (cstr.length === 1) {
        console.log("Entry is a palindrome.");
        return true;
      } else {
  
        ccount = (cstr.length - 1) / 2;
      }
    }
  
    for (var x = 0; x < ccount; x++) {
  
      if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("Entry is not a palindrome.");
        return false;
      }
    }
    console.log("The entry is a palindrome.");
    return true;
  }
  check_Palindrome('madam');
  check_Palindrome('nurses run');
  check_Palindrome('fox');
  






// ..................tsk#11..................


function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));





// ..................tsk#12..................



function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }
  
  document.write(longestWord("Web Development Tutorial"));
  


// ..................tsk#13..................



function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('Web Development Tutorial', 'o'));




// ..................tsk#14..................

function circle(radius)
{
    this.radius = radius;
  
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
document.write('Area =', c.area().toFixed(2));
document.write('perimeter =', c.perimeter().toFixed(2));











// '''''''''''''''''chapter 38  to   42''''''''''''''


// ..................tsk#01..................



function pow(a,b)
{
        var ans = 1;
        for (var i =1; i <= b; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(pow(2, 3));



// ..................tsk#02..................


function checkLeapYear(year) {

  
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      document.write(year + ' is a leap year');
  } else {
      document.write(year + ' is not a leap year');
  }
}

var year = prompt('Enter a year:');

checkLeapYear(year);



// ..................tsk#03..................


var a = prompt("enter value of a")
var b = prompt("enter value of b")
var c = prompt("enter value of c")
function areaOftringle(){
 var S = ( a + b + c ) / 2;
  var area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
  document.write(area)
  
}
areaOftringle()


// ..................tsk#04..................


function percentage(){
  var obtainMrksOfstudent1 = prompt("enter first student marks out 200");
var obtainMrksOfstudent2 = prompt("enter first 2ndstudent marks out 200");
 
var percent1 = (obtainMrksOfstudent1 / 200) * 100;
var percent2 = (obtainMrksOfstudent2 / 200) * 100;
 

document.write("student1 have got:"  + " " + percent1 + "% " +"<br>"+  "student2 have got:"  + " " + percent2  + "% " );
}

percentage()


// ..................tsk#05..................

function indexs(){
  var str = "Hello world, welcome to js.";
  var n = str.indexOf("js");
  document.write(n)
}
  indexs()


// ..................tsk#06..................


var strings = ["Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long."];                          

  function vowel(){
    string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

    document.write(string);
  }
  vowel()


// ..................tsk#07..................

function findOccurances(str){
  var words = str.split(" ");
  var count=0;
  for(var i=0;i<words.length;i++){
      for(var j=0; j<words[i].length; j++){
          var char = words[i].slice(j,j+1).toLowerCase();
          var nextChar = words[i].slice(j+1,j+2).toLowerCase();
          switch(char){
              case "a":
              case "e":
              case "i":
              case "o":
              case "u":
                  switch(nextChar){
                      case "a":
                      case "e":
                      case "i":
                      case "o":
                      case "u":
                          count++;
                  }
          }
      }
      
  }
  return count;
}

var str = "how are you ";
var count = findOccurances(str);
alert(count);



// ..................tsk#08..................


function conversion(){
  var entervalue = prompt("enter distance in killometers")
  var killometersTometer = (entervalue)*(1000);
  document.write(entervalue+"Km"+ " " + " is" +"="+killometersTometer +"m")
}
conversion()


function conversion(){
  var entervalue = prompt("enter distance in killometers")
  var killometersTofeet = (entervalue)*(10000);
  document.write(entervalue+"Km"+ " " + " is" +"="+killometersTofeet +"f")
}
conversion()


function conversion(){
  var entervalue = prompt("enter distance in killometers")
  var killometersToinches = (entervalue)*(10000);
  document.write(entervalue+"Km"+ " " + " is" +"="+killometersToinches +"Inch")
}
conversion()


function conversion(){
  var entervalue = prompt("enter distance in killometers")
  var killometersTocm = (entervalue)*(100000);
  document.write(entervalue+"Km"+ " " + " is" +"="+killometersTocm +"cm")
}
conversion()


// ..................tsk#09..................


function get_salary() {

  var hours = prompt("Please enter the number of hours you worked this week");
  var rate = prompt("Please enter how much money you earn per hour");
  
  //Calculates over time pay or regular pay
  if (hours>= 40)
  
  {
  regpay = (rate * 40)
  overtimepay = ((rate * 1.5) * (hours - 40))
  pay = (regpay + overtimepay)
  
  // Send an alert with over time pay values
  alert ("You earned overtime this week! Your total pay is " + pay);
  
  }
  
  else 
  {
  regpay = (rate * hours)
  overtimepay = 0.00
  
  //send an alert with regular paid amount
  alert ("Your total pay is " + regpay);
  }
  }

  get_salary()


// ..................tsk#10..................


var Amount = prompt("Please Enter Amount for Withdraw :");
var  a =  Amount / 100;
var  b =  ((Amount % 100) / 50)
var  c = (((Amount % 100) % 50) / 10)
var  d =   (((Amount % 100) % 50) % 10)

document.write( "Required notes of 100 is : " +a)
document.write("Required notes of 50 is : " +b)
document.write("Required notes of 10 is : " +c)
document.write("Amount still remaining is : " +d)