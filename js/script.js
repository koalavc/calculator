let text = document.getElementById('text');

let tom = document.querySelectorAll('.btn');

for (let i = 0; i < tom.length; i++) {
  // console.log(tom[i]);
  tom[i].addEventListener('click', display);
  
  function display() {
    // console.log(text.value += 1);
    switch (tom[i]) {
      case tom[0]:
        text.value += 1;
        console.log('1');
        break;
      case tom[1]:
        text.value += 2;
        console.log('it worked');
        break;
      case tom[2]:
        text.value += 3;
        break;
      case tom[3]:
        text.value += '+';
        break;
      case tom[4]:
        text.value += 4;
        break;
      case tom[5]:
        text.value += 5;
        break;
      case tom[6]:
        text.value += 6;
        break;
      case tom[7]:
        text.value += '-';
        break;
      case tom[8]:
        text.value += 7;
        break;
      case tom[9]:
        text.value += 8;
        break;
      case tom[10]:
        text.value += 9;
        break;
      case tom[11]:
        text.value += '*';
        break;
      case tom[12]:
        text.value += 0;
        break;
      case tom[13]:
        text.value = '';
        break;
      case tom[14]:
        text.value += '/';
        break;
      case tom[15]:
        let answer = text.value;
        answer = eval(answer);
        text.value = answer;
        break;
      default:
        break;
    }
  };
};