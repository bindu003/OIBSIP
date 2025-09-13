let input = "";
let ans = 0;

function addChar(char) {
  if (char === '√') {
    input += "Math.sqrt(";
  } else {
    input += char;
  }
  document.getElementById('input').textContent = input;
}

function clearDisplay() {
  input = "";
  document.getElementById('input').textContent = "";
  document.getElementById('result').textContent = "0";
}

function delChar() {
  input = input.slice(0, -1);
  document.getElementById('input').textContent = input;
}

function calculate() {
  try {
    const result = eval(input.replace(/√/g, 'Math.sqrt'));
    document.getElementById('result').textContent = result;
    ans = result;
  } catch (e) {
    document.getElementById('result').textContent = "Error";
  }
}

function getAns() {
  input += ans;
  document.getElementById('input').textContent = input;
}
