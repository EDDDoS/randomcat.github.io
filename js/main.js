const url = 'https://api.thecatapi.com/v1/images/search';
const reloadImage = document.querySelector('button');

fetch(url)
    .then(res => res.json())
    .then(data => {
    const img = document.querySelector('#cat');
    img.src = data[0].url;
});

reloadImage.addEventListener('click', randomCats);
function randomCats(){
    fetch(url)
        .then(res => res.json())
        .then(data => {
        const img = document.querySelector('#cat');
        img.src = data[0].url;
    });
}