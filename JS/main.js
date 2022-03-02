import { actualSign } from './signos.js';

let counter = 0;

// Funções //
window.onload = function init() {
  loadingInit();
  start();
  changeText();
  changeAbout();
  changeCaracteristics();
  changeDate();
  changeColor();
  changeColorTitles();
  changeColorDate();
  changeImg();
};

const backPage = document.querySelector('.back');
const nextPage = document.querySelector('.next');
backPage.addEventListener('click', modifyPage);
nextPage.addEventListener('click', modifyPage);

const colorOne = document.querySelector('.color--one');
const colorTwo = document.querySelector('.color--two');

colorOne.addEventListener('click', modifyColors);
colorTwo.addEventListener('click', modifyColors);

// Mudar de Página ao clicar em Próximo ou Anterior

function modifyPage(el) {
  el.preventDefault();
  let textInside = el.target.textContent;
  if (textInside == 'Próximo') {
    counter++;
    if (counter == actualSign.length) {
      counter = 0;
    }
  } else {
    counter--;
    if (counter == -1) {
      counter = actualSign.length - 1;
    }
  }
  loadingInit();
  start();
  changeText();
  changeAbout();
  changeCaracteristics();
  changeDate();
  changeColor();
  changeColorTitles();
  changeColorDate();
  changeImg();
}

// Alterar Textos com nome do Signo

function changeText(sign) {
  const text = document.querySelectorAll('.signo');
  text.forEach((el) => {
    let nome = (el.textContent = actualSign[counter].nome.toUpperCase());
  });
}

// Alterar seção sobre

function changeAbout() {
  const about = document.querySelector('.about__paragraph');
  about.textContent = actualSign[counter].sobre;
}

// Alterar seção caracteristicas

function changeCaracteristics() {
  const caracteristics = document.querySelector('.caracteristics__p');
  caracteristics.textContent = actualSign[counter].caracteristica;
}

//Alterar seção data

function changeDate() {
  const date = document.querySelector('.date__p');
  date.textContent = actualSign[counter].data;
}

// Mudar cor Principal do Signo
function changeColor() {
  colorOne.setAttribute('style', `background: ${actualSign[counter].cores[0]}`);
  colorTwo.setAttribute('style', `background: ${actualSign[counter].cores[1]}`);
  if (actualSign[counter].nome == 'Libra') {
    colorTwo.setAttribute('style', 'display: none');
  }
}

// Mudar cor dos Titulos e icone de seta do footer

function changeColorTitles() {
  const titles = document.querySelectorAll('span');
  const icon = document.querySelector('.arrow');
  icon.setAttribute('style', `border-color: ${actualSign[counter].cores[0]}`);
  titles.forEach((el) => {
    el.setAttribute('style', `color: ${actualSign[counter].cores[0]}`);
  });
}

// Mudar cor do background da data

function changeColorDate() {
  const date = document.querySelector('.date');
  date.setAttribute('style', `background: ${actualSign[counter].cores[0]}`);
}
function changeImg() {
  const img = document.querySelector('img');
  img.setAttribute('src', `.${actualSign[counter].img}.png`);
}
// Função para mudar cor de acordo com escolha do usuário

function modifyColors(el) {
  el.preventDefault();
  let date = document.querySelector('.date');
  let titles = document.querySelectorAll('span');
  let colorInside = el.target.classList.value;
  let icon = document.querySelector('.arrow');

  if (colorInside == 'color--one') {
    date.setAttribute('style', `background: ${actualSign[counter].cores[0]}`);
    titles.forEach((el) => {
      el.setAttribute('style', `color: ${actualSign[counter].cores[0]}`);
    });
    icon.setAttribute('style', `border-color: ${actualSign[counter].cores[0]}`);
  } else {
    if (actualSign[counter].cores[1] == undefined) {
      return;
    } else {
      date.setAttribute('style', `background: ${actualSign[counter].cores[1]}`);
      titles.forEach((el) => {
        el.setAttribute('style', `color: ${actualSign[counter].cores[1]}`);
      });
      icon.setAttribute(
        'style',
        `border-color: ${actualSign[counter].cores[1]}`
      );
    }
  }
}

// Função para mudar cor do Loading

function loadingInit() {
  const loadingColor = document.querySelectorAll('.lds-ring div');
  loadingColor.forEach((el) => {
    el.setAttribute(
      'style',
      `border-color: ${actualSign[counter].cores[0]}#0000 #0000 #0000`
    );
  });
}

// Função para iniciar Loading

function start() {
  let loading = document.querySelector('.lds-ring');
  let main = document.querySelector('main');
  loading.classList.remove('hide');
  main.classList.add('hide');
  setTimeout(() => {
    main.classList.remove('hide');
    loading.classList.add('hide');
  }, 500);
}
