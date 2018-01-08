let text = document.getElementById('text');

document.getElementById("button1").addEventListener('click', function () {
  console.log(parseInt(text.value += 1));
});

document.getElementById("button2").addEventListener('click', function () {
  text.value += 2;
});

document.getElementById("button3").addEventListener('click', function () {
  text.value += 3;
});

document.getElementById("button4").addEventListener('click', function () {
  text.value += 4;
});

document.getElementById("button5").addEventListener('click', function () {
  text.value += 5;
});

document.getElementById("button6").addEventListener('click', function () {
  text.value += 6;
});

document.getElementById("button7").addEventListener('click', function () {
  text.value += 7;
});

document.getElementById("button8").addEventListener('click', function () {
  parseInt(text.value += 8);
});

document.getElementById("button9").addEventListener('click', function () {
  console.log(parseInt(text.value += 9));
});

document.getElementById("button0").addEventListener('click', function () {
  console.log(parseInt(text.value += 0));
});

document.getElementById("eraseText").addEventListener('click', function () {
  text.value = '';
});

document.getElementById("addButton").addEventListener('click', function () {
  console.log(text.value += ' + ');
});

document.getElementById('evaluate').addEventListener('click', function () {
  let answer = text.value;
  answer = eval(answer);
  text.value = answer;
});

document.getElementById('divide').addEventListener('click', function () {
  text.value += "/";
});

document.getElementById('subtract').addEventListener('click', function () {
  text.value += "-";
});

document.getElementById('multiply').addEventListener('click', function () {
  text.value += "*";
});


// var erased = document.querySelector('#eraseText');
// var input = document.querySelector('#text');

// erased.addEventListener('click', function(){
//   input.value = '';
// }, false);

// function eraseText() {
//     document.getElementById('text').value = "";
// }

