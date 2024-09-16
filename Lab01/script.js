document.querySelector('#planButton').addEventListener('click', function() {
  const destination = document.querySelector('#destination').value;
  const date = document.querySelector('#date').value;
  const duration = document.querySelector('#duration').value;

  const resultMessage = document.querySelector('.resultMessage');
  const resultDiv = document.querySelector('.result');

  if (destination && date && duration) {
    resultMessage.innerText = `Ви запланували подорож до ${destination} на ${duration} днів, починаючи з ${date}.`;
    resultDiv.style.display = 'block';

    const inputFields = document.getElementsByClassName('input-field');
    for (let field of inputFields) {
      field.classList.remove('error');
    }
  } else {
    resultMessage.innerText = 'Будь ласка, заповніть усі поля.';
    resultDiv.style.display = 'block';

    const inputFields = document.getElementsByClassName('input-field');
    for (let field of inputFields) {
      if (!field.value) {
        field.classList.add('error');
      }
    }
  }
});

document.getElementsByClassName('clearButton')[0].addEventListener('click', function() {
  const inputFields = document.getElementsByClassName('input-field');
  for (let field of inputFields) {
    field.value = '';
    field.classList.remove('error');
  }
  document.querySelector('#duration').value = '3';
  document.querySelector('.result').style.display = 'none';
});

const greeting = document.querySelector('.greeting');
greeting.addEventListener('mouseover', function() {
  this.style.color = '#e74c3c';
  this.innerText = 'Готові до нової пригоди?';
});

greeting.addEventListener('mouseout', function() {
  this.style.color = '#000';
  this.innerText = 'Заплануйте свою наступну подорож нижче:';
});

const fonts = ['Arial', 'Verdana', 'Courier New', 'Georgia', 'Times New Roman'];
let currentFontIndex = 0;
document.getElementsByTagName('h2')[0].addEventListener('click', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  currentFontIndex = (currentFontIndex + 1) % fonts.length;
  this.style.color = randomColor;
  this.style.fontFamily = fonts[currentFontIndex];
});

document.querySelectorAll('.input-field').forEach((field, index, fields) => {
  field.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();

      const allInputs = document.querySelectorAll('input, textarea, select');
      let nextIndex = Array.prototype.indexOf.call(allInputs, this) + 1;
      if (nextIndex < allInputs.length) {
        allInputs[nextIndex].focus();
      }
    }
  });
});