let string = "";
let last_result="";
let p = 0;
let buttons = document.querySelectorAll("button");
console.log(buttons);
function fac(n) {
  if (n == 1 || n == 0) {
    return n;
  } else {
    return n * fac(n - 1);
  }
}
function calc(e) {
  let input_value = document.querySelector("input");

  if (p == 1) {
    string = "";
    input_value.value = "";
    p = 0;
  }
  if (e.target.innerHTML == "=") {
    let arr = Array.from(string);
    console.log(`${arr}`);

    let index = arr.indexOf("!");
    let num;
    if (index >= 0) {
      if (isNaN(arr[arr.length - 2])) {
        input_value.value = "Syntax Error";
        p = 1;
        return;
      }

      arr.pop();
      num = parseFloat(arr.join(""));
      input_value.value = fac(num);
      p = 1;
    } else {
      try {
        string = eval(string.replace("^", "**"));
      } catch (error) {
        string = "Syntax Error";
        p = 1;
      }
      input_value.value = string;
      last_result=string;
      string = "";
    }
  }
  else if(e.target.innerHTML =="Res"){
    string=string + last_result;
    input_value.value = string;
  }
   else if (e.target.innerHTML == "AC") {
    string = "";
    input_value.value = string;
  } else {
    string = string + e.target.innerHTML;
    input_value.value = string;
  }
}
buttons.forEach((e) => e.addEventListener("click", calc));
