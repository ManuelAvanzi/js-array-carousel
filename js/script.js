



//creo due liste contententi titoli e paragrafi

const titlesList=[
    "titolo uno",
    "titolo due",
    "titolo tre",
    "titolo quattro",
    "titolo cinque"
];
const textsList=[
    "questo è il primo paragrafo ",
    "questo invece è il secondo paragrafo",
    "questo è il terzo paragrafo",
    "questo è il penultimo paragrafo",
    "questo è l'ultimo paragrafo",
];
const imgList=[
    "url(../img/margherita.jpg)",
    "url(../img/capricciosa.jpg)",
    "url(../img/quattro_stagioni.jpg)",
    "url(../img/salame.jpg)",
    "url(../img/tonno_e_cipolla.jpg)"
];

//pulsanti
const next=document.getElementById("next");
const prev=document.getElementById("previous");

//la mia box
const box=document.getElementById("box");

//titolo e testi presenti nella box
const title=document.getElementById("title");
const text=document.getElementById("text");

// variabile che fa da contatore ,inizializzata a 0 
let counter=0;

next.addEventListener("click",function(){
    counter++;
    // se counter supera la lunghezza della lista lo resetto 
    if(counter===titlesList.length){
        counter=0;
    }
    title.textContent=titlesList[counter];
    text.textContent=textsList[counter];
    box.style.backgroundImage=imgList[counter];

})

prev.addEventListener("click",function(){
    counter--;

    //se counter è più piccolo di zero allora lo porto alla fine della lista 
    if(counter<0){
        counter=titlesList.length-1;
    }
    
    title.textContent=titlesList[counter];
    text.textContent=textsList[counter];

})



