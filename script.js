const img = document.querySelector('img');
const catBtn = document.querySelector('.more-cats');
const generatorBtn = document.querySelector('.generate');
const input = document.querySelector('input');
const title = document.querySelector('h1');
const subTitle = document.querySelector('h3');
const loadingPrompt = document.querySelector('.loading');
let searchTerm = 'cats';

async function randomImg() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=G2oXi2ymwPBe3rsxQGcUYk7k86etVwiX&s&s=${searchTerm}`,
    { mode: 'cors' }
  );
  const imgData = await response.json();
  img.src = imgData.data.images.original.url;
  catBtn.style.display = 'block';
  loadingPrompt.innerText = '';
}

const generateImg = function () {
  const subject = input.value.console.log(subject);
};

catBtn.addEventListener('click', (e) => {
  randomImg();
  catBtn.style.display = 'none';
  loadingPrompt.innerText = `Now loading your ${searchTerm}`;
});

generatorBtn.addEventListener('click', (e) => {
  img.src = '';
  searchTerm = input.value;
  title.innerText = `Random ${searchTerm} Gif Generator`;
  randomImg();
});

randomImg();
