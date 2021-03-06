//Zadanie 1
const addDiv = document.createElement('div');
addDiv.textContent = "To jest nowy element";
document.body.appendChild(addDiv);

//Zadanie 2
const favouriteFruits = document.createElement('ul');
fruits  = ['apple', 'plum', 'banana', 'strawberry', 'pear', 'peach'];
for (let i=0; i<6; i++){
	const fruit = document.createElement('li');
	fruit.textContent = fruits [i];
	favouriteFruits.appendChild(fruit);
}
document.body.appendChild(favouriteFruits);

//Zadanie 3
const button = document.createElement('button');
button.textContent = 'Usu� co drugi element';
button.addEventListener('click', function(){
	const listElements = document.querySelectorAll('li');
	for(let i=0; i < listElements.length; i++){
		if (i%2 !== 0){
			listElements[i].remove();
		}
	}
})
document.body.appendChild(button);

//Zadanie 4
const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'Kliknij aby usun�� przycisk';
document.body.appendChild(buttonDelete);
buttonDelete.addEventListener('click', function(){
	this.remove();
})

//Zadanie 5
let randomNumber = Math.floor(Math.random()*10+1);
for(let number=1; number<= randomNumber; number++){
	const newDiv = document.createElement('div');
	newDiv.textContent = `To jest div numer ${number}`;
	document.body.appendChild(newDiv);
}

//Zadanie 6
const elementsObject = {
	div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span'
}

function createHtml(elementsObject){
	const div1 = document.createElement('div');
    div1.textContent = elementsObject.div1;
    document.body.appendChild(div1);

    const span1 = document.createElement('span');
    span1.textContent = elementsObject.span1;
    document.body.appendChild(span1);

    const div2 = document.createElement('div');
    div2.textContent = elementsObject.div2.div3;
    document.body.appendChild(div2);

    const span2 = document.createElement('span');
    span2.textContent = elementsObject.span2;
    document.body.appendChild(span2);

}
createHtml(elementsObject);

//Zadanie 7
const firstList = document.createElement('ul');
firstList.classList.add('firstList');
firstList.textContent = 'Zadania do wykonania:';
const secondList = document.createElement('ul');
secondList.classList.add('secondList');
secondList.textContent = 'Zadania wykonane:';

for(let i = 1; i<8; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = "Zadanie " + i;
    firstList.appendChild(liElement);
}

const firstListButton = document.createElement('button');
firstListButton.textContent = 'Przenie� element';
const secondListButton = document.createElement('button');
secondListButton.textContent = 'Przenie� element';
secondListButton.setAttribute('disabled', true);

function copyEl() {
    let toClone;
    if(this.previousElementSibling.classList.contains('firstList')) {
        toClone = firstList.lastElementChild.cloneNode(true);
        firstList.lastElementChild.remove();
        secondList.appendChild(toClone);
        secondList.nextElementSibling.removeAttribute('disabled');
    }
    else {
        toClone = secondList.lastElementChild.cloneNode(true);
        secondList.lastElementChild.remove();
        firstList.appendChild(toClone);
        firstList.nextElementSibling.removeAttribute('disabled');
    }
    if(this.previousElementSibling.children.length == 0) {
        this.setAttribute('disabled', true);
    }
}

firstListButton.addEventListener('click', copyEl);
secondListButton.addEventListener('click', copyEl);

document.body.appendChild(firstList);
document.body.appendChild(firstListButton);
document.body.appendChild(secondList);
document.body.appendChild(secondListButton);

  // Zadanie 8.
  function createLabel(labelString) {
    let label = document.createElement('label');
    label.innerHTML = labelString;

    return label;
  }

  let result = document.createElement('div');
  result.id = "result"
  let form = document.createElement('form');
  let element = document.createElement('input');
  element.id = "element";
  let color = document.createElement('input');
  color.id = "color";
  let text = document.createElement('input');
  text.id = "text";
  let howMany = document.createElement('input');
  howMany.id = "how-many";
  let submit = document.createElement('button');
  submit.innerText = "Utw�rz";
  submit.type = "submit";
  submit.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < parseInt(howMany.value); i++) {
      let newElement = document.createElement(`${element.value}`);
      newElement.style.color = `${color.value}`;
      newElement.innerText = text.value;

      root.appendChild(newElement);
    }
  });

  form.appendChild(createLabel('Element</br>'));
  form.appendChild(element);
  form.appendChild(createLabel('</br>'))
  form.appendChild(createLabel('Kolor w HEX</br>'));
  form.appendChild(color);
  form.appendChild(createLabel('</br>'))
  form.appendChild(createLabel('Tekst</br>'));
  form.appendChild(text);
  form.appendChild(createLabel('</br>'))
  form.appendChild(createLabel('Ilo��</br>'));
  form.appendChild(howMany);
  form.appendChild(createLabel('</br></br>'))
  form.appendChild(submit);

  root.appendChild(form);
  root.appendChild(result);

  // Zadanie 11
  function numbers(text) {
    const reg = /\d/g;
    const match = text.match(reg);
    let sum = 0;
    let ratio = 1;
    match.forEach(num => {
      sum += parseInt(num);
      ratio *= parseInt(num);
    })
    console.log(`Suma liczb : ${sum}`);
    for (let i = 0; i < ratio; i++) {
      const newDiv = document.createElement('div');
      newDiv.textContent = text;
      document.body.appendChild(newDiv);
    }
  }

  numbers('1 miejsce w wy�cigu F1');

  // Zadanie 12
  const textString = "Ala ma kota a kot ma Ale".toLowerCase();
  const ala = "Ala".toLowerCase();
  const ola = "Ola".toLowerCase();
  const notFound = `S�owo ${ala} nie wystepuje w tekscie`;

  function checkText(str) {

    const strObj = {
      txt: str,
      checkStr: function() {
        if (this.txt.includes(ala)) console.log(replaceString(ala, ola, strObj.txt));
        else {
          const div = document.createElement('div');
          div.textContent = notFound;
          root.appendChild(div);
        }
      }
    }
    strObj.checkStr();
  }

  function replaceString(oldS, newS, text) {
    for (var i = 0; i < text.length; i++) {
      if (text.substring(i, i + oldS.length) == oldS)
        text = text.substring(0, i) + newS + text.substring(i + oldS.length, text.length);
    }
    return text;
  }

  checkText(textString);

  // Zadanie 13
  function stringsLength(elements) {
    const result = [];

    elements.forEach((element) => {
      result.push(element.replace(/[^A-Z|a-z]/g, '').split('').length);
    })

    return result;
  }

  const lengthStrings = stringsLength(['jakis', 'string']);

  console.log(lengthStrings);

  function getSumFromArray(array) {
    return array.reduce((a, b) => (a + b));
  }

  const sumLengthStrings = getSumFromArray(lengthStrings);
  console.log("Suma: " + sumLengthStrings);

  function getAvgFromArray(sum, array) {
    return sum / array.length;
  }

  const avgLengthStrings = getAvgFromArray(sumLengthStrings, lengthStrings);
  console.log("�rednia: " + avgLengthStrings);

  // Zadanie 14
  function createObject() {
    return {
      name: '',
      surname: '',
      age: '',
    };
  }

  let person = createObject();

  function setValues(name, surname, age) {
    person.name = name;
    person.surname = surname;
    person.age = age;

    person.nameLength = name.length;
    person.surnameLength = surname.length;
    person.ageLength = age.length;

    if (person.nameLength > 5 || person.surnameLength > 5 || person.age > 5) {
      const defaultObjectBtn = document.createElement('button');
      defaultObjectBtn.innerText = 'Przywr�c obiekt';
      document.body.append(defaultObjectBtn, document.getElementById('root'));

      defaultObjectBtn.addEventListener('click', () => {
        person = createObject();

        console.log(person);
      })
    }

    console.log(person);
  }

  setValues('Mateusz', 'Sznober', 21);