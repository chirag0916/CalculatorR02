let numOne = "";
let numTwo = "";
let operator = "";

function add (a,b) {
  
  return parseFloat(a) + parseFloat(b);
}

function subtract (a,b) {
  return parseFloat(a) - parseFloat(b);
}

function mulitplication (a,b) {
  return parseFloat(a) * parseFloat(b);
}

function division (a,b) {
  if (parseFloat(b) == 0) {
    return "Nice Try";
  }
  else {
    return parseFloat(a) / parseFloat(b);
  }
}

let one = document.querySelector("#one");
one.addEventListener('click', function () {
  // If operator is empty, everything is numOne input
  if (operator == "") {
    numOne = numOne + "1";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "1";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let two = document.querySelector("#two");
two.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "2";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "2";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let three = document.querySelector("#three");
three.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "3";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "3";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let four = document.querySelector("#four");
four.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "4";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "4";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let five = document.querySelector("#five");
five.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "5";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "5";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let six = document.querySelector("#six");
six.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "6";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "6";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let seven = document.querySelector("#seven");
seven.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "7";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "7";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let eight = document.querySelector("#eight");
eight.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "8";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "8";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let nine = document.querySelector("#nine");
nine.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "9";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "9";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let zero = document.querySelector("#zero");
zero.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + "0";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + "0";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

let decimal = document.querySelector("#decimal");
decimal.addEventListener('click', function () {
  if (operator == "") {
    numOne = numOne + ".";
    console.log("numone");
    let display = document.querySelector(".display");
    display.textContent = numOne;
  }
  else {
    numTwo = numTwo + ".";
    console.log("numtwo");
    let display = document.querySelector(".display");
    display.textContent = numOne + operator + numTwo;
  }
})

  let clear = document.querySelector("#clear");
  clear.addEventListener('click', function() {
   numOne="";
   numTwo="";
   operator="";
   console.log("cleared");
   let display= document.querySelector(".display");
    display.textContent = "";
  })

  let plus = document.querySelector("#add");
  plus.addEventListener('click', function() {
    if (operator != "") {
      operate();
      let display= document.querySelector(".display");
      display.textContent = numOne + operator;
    }
   operator = "+";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let subtraction = document.querySelector("#subtract");
  subtraction.addEventListener('click', function() {
    if (operator !="") {
      operate();
      let display= document.querySelector(".display");
      display.textContent = numOne + operator;
    }
   operator = "-";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let multiply = document.querySelector("#multiply");
  multiply.addEventListener('click', function() {
    if (operator !="") {
      operate();
      console.log("ouput as numOne");
      let display= document.querySelector(".display");
      display.textContent = numOne + operator;
    }
   operator = "*";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let divide = document.querySelector("#divide");
  divide.addEventListener('click', function() {
    if (operator != "") {
      operate();
      console.log("ouput as numOne");
      let display= document.querySelector(".display");
      display.textContent = numOne + operator;
    }
   operator = "÷";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let output = document.querySelector("#equal");
  output.addEventListener('click', operate);

function operate() {
  if (operator == "+") {
  let result = add(numOne,numTwo);
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(add(numOne,numTwo));
  })
  let display= document.querySelector(".display");
  display.textContent = result;
  numOne=result.toString();
  numTwo="";
  operator="";
}

else if (operator == "-") {
  let result = subtract(numOne,numTwo);
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(subtract(numOne,numTwo));
  })
  let display= document.querySelector(".display");
  display.textContent = subtract(numOne,numTwo);
  numOne=result.toString();
  numTwo="";
  operator="";
}

else if (operator == "*") {
  let result = mulitplication(numOne,numTwo);
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(mulitplication(numOne,numTwo));
  })
  let display= document.querySelector(".display");
  display.textContent = mulitplication(numOne,numTwo);
  numOne=result.toString();
  numTwo="";
  operator="";
}

else if (operator == "÷") {
  let result = division(numOne,numTwo);
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(division(numOne,numTwo));
  })
  let display= document.querySelector(".display");
  display.textContent = division(numOne,numTwo);
  numOne=result.toString();
  numTwo="";
  operator="";
}

}
