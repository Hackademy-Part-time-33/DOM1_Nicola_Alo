/*
Traccia 1:
Lavora con il DOM:
crea una pagina HTML con 3 paragrafi e 3 bottoni.
Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
ogni paragrafo dovra' avere un colore diverso.
il secondo dovra’ rendere il testo dei paragrafi in grassetto.
il terzo dovra’ far scomparire e ricomparire i paragrafi.

TIPS:
ricordati della proprieta’ display: none in CSS!
i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.
*/


let pharagraphs = document.querySelectorAll('p');
let buttoncolor = document.querySelector('#buttoncolor');
let buttonbold = document.querySelector('#buttonbold');
let buttonone = document.querySelector('#buttonone');
let firstpart = document.querySelector('#firstpart');

function randomColor() {
    let r = Math.floor(Math.random()*(256 - 0));
    let g = Math.floor(Math.random()*(256 - 0));
    let b = Math.floor(Math.random()*(256 - 0));

    return `rgb(${r},${g},${b})`;
    
};

buttoncolor.addEventListener('click', ()=>{
    pharagraphs.forEach(p => {
        p.style.color = randomColor();
    });

});

buttonbold.addEventListener('click', ()=>{
    pharagraphs.forEach(p => {
        p.style.fontWeight = 'bold';
    })

});

buttonone.addEventListener('click', ()=>{
    firstpart.classList.toggle('dispnone');

});


/*
Traccia 2:
Crea un file html con le seguenti caratteristiche:
un input per il titolo
una textarea per inserire un paragrafo
un bottone per creare l’articolo
Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input
inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN
let date = new Date();
let formatDate = date.toLocaleDateString()

EXTRA:
fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
fai in modo che, una volta creato l’articolo, gli input vengano puliti
 (modificato)
[22:04]"

*/
let secondpart = document.querySelector('#secondpart');
let containerArticles = document.querySelector('.containerArticles');
let title = document.querySelector('#title');
let description = document.querySelector('#description');
let btnArticle = document.querySelector('#btnArticle');

btnArticle.addEventListener('click', ()=>{
    if (title.value==="" || description.value==="") {
        alert('Titolo o paragrafo sono vuoti')
        title.value="";
        description.value="";
    } else {
    let date = new Date();
    let formatDate = date.toLocaleDateString()
    let article = document.createElement('article');
    article.innerHTML = 
    `<h3>${title.value}</h3>
    <p>${description.value}</p>
    <time>${formatDate}</time>`;
    article.classList.add('secondPartArticle');
    containerArticles.appendChild(article);
    title.value="";
    description.value="";
    }
})
