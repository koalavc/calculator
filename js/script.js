let text = document.getElementById('text');

let bttn = document.querySelectorAll('.btn');

for (let i = 0; i < bttn.length; i++) {
  // console.log(tom[i]);
  bttn[i].addEventListener('click', display);
  
  function display() {
    // console.log(text.value += 1);
    switch (bttn[i]) {
      case bttn[0]:
        text.value += 1;
        console.log('1');
        break;
      case bttn[1]:
        text.value += 2;
        console.log('it worked');
        break;
      case bttn[2]:
        text.value += 3;
        break;
      case bttn[3]:
        text.value += '+';
        break;
      case bttn[4]:
        text.value += 4;
        break;
      case bttn[5]:
        text.value += 5;
        break;
      case bttn[6]:
        text.value += 6;
        break;
      case bttn[7]:
        text.value += '-';
        break;
      case bttn[8]:
        text.value += 7;
        break;
      case bttn[9]:
        text.value += 8;
        break;
      case bttn[10]:
        text.value += 9;
        break;
      case bttn[11]:
        text.value += '*';
        break;
      case bttn[12]:
        text.value += 0;
        break;
      case bttn[13]:
        text.value = '';
        break;
      case bttn[14]:
        text.value += '/';
        break;
      case bttn[15]:
        let answer = text.value;
        answer = eval(answer);
        text.value = answer;
        break;
      default:
        break;
    }
  };
};