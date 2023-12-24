let numOne;
let numtwo;
let operator = "";

function add (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function mulitplication (a,b) {
  return a * b;
}

function division (a,b) {
  return a / b;
}





let one = document.querySelector("#one");
  one.addEventListener('click', function() {
    if (numOne == undefined) {
      numOne = 1;
      console.log("numone");
      let display= document.querySelector(".display");
      display.textContent = numOne;
    }
    else{
      numtwo = 1;
      console.log("numtwo");
      let display= document.querySelector(".display");
      display.textContent = numOne + operator + numtwo;
    }
  })

  let two = document.querySelector("#two");
  two.addEventListener('click', function() {
    if (numOne == undefined) {
      numOne = 2;
      console.log("numone");
      let display= document.querySelector(".display");
      display.textContent = numOne;
    }
    else{
      numtwo = 2;
      console.log("numtwo");
      let display= document.querySelector(".display");
      display.textContent = numOne + operator + numtwo;
    }
  })

  let clear = document.querySelector("#clear");
  clear.addEventListener('click', function() {
   numOne=undefined;
   numtwo=undefined;
   operator="";
   console.log("cleared");
   let display= document.querySelector(".display");
    display.textContent = "";
  })

  let plus = document.querySelector("#add");
  plus.addEventListener('click', function() {
   operator = "+";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let subtraction = document.querySelector("#subtract");
  subtraction.addEventListener('click', function() {
   operator = "-";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let multiply = document.querySelector("#multiply");
  multiply.addEventListener('click', function() {
   operator = "*";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let divide = document.querySelector("#divide");
  divide.addEventListener('click', function() {
   operator = "÷";
   let display= document.querySelector(".display");
    display.textContent = numOne + operator;
  })

  let output = document.querySelector("#equal");
  output.addEventListener('click', operate);

function operate() {
  if (operator == "+") {
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(add(numOne,numtwo));
  })
  let display= document.querySelector(".display");
  display.textContent = add(numOne,numtwo);
}

else if (operator == "-") {
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(subtract(numOne,numtwo));
  })
  let display= document.querySelector(".display");
  display.textContent = subtract(numOne,numtwo);
}

else if (operator == "*") {
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(mulitplication(numOne,numtwo));
  })
  let display= document.querySelector(".display");
  display.textContent = mulitplication(numOne,numtwo);
}

else if (operator == "÷") {
  let output = document.querySelector("#equal");
  output.addEventListener('click', function() {
  console.log(division(numOne,numtwo));
  if(numtwo == 0) {
    let display= document.querySelector(".display");
  display.textContent = "nice try";
  }
  })
  let display= document.querySelector(".display");
  display.textContent = division(numOne,numtwo);
}

}
