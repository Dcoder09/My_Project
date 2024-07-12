let string = "";
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
  if (e.target.innerHTML == "=") {
    let arr = Array.from(string);
    let index = arr.indexOf("!");
    let num;
    if (index >= 0) {
      arr.pop();
      num = parseFloat(arr.join(""));
      input_value.value = fac(num);
    } else {
      string = eval(string.replace("^", "**"));
      input_value.value = string;
    }
  } else if (e.target.innerHTML == "AC") {
    string = "";
    input_value.value = string;
  } else {
    string = string + e.target.innerHTML;
    input_value.value = string;
  }
}
buttons.forEach((e) => e.addEventListener("click", calc));
