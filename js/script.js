
// titles list
const titlesList=[
    "Margherita",
    "Capricciosa",
    "Quattro stagioni",
    "Salame",
    "Tonno e cipolle",
    "Speck e rucola",
];
// texts list 
const textsList=[
    "la grande classica ",
    "capricci in pizzeria",
    "come l'opera di Vivaldi",
    "Piccante è meglio ",
    "il meglio per l'alito",
    "Gigi Finizio"
];
// images list 
const imgList=[
    "./img/margherita.jpg",
    "./img/capricciosa.jpg",
    "./img/quattro_stagioni.jpg",
    "./img/salame.jpg",
    "./img/tonno_e_cipolla.jpg",
    "./img/speck&rucola.jpg"
];

//buttons
const next=document.getElementById("next");
const prev=document.getElementById("prev");

//main image
const image=document.getElementById("image");

//main title texts
const title=document.getElementById("title");
const text=document.getElementById("text");

//thumb images saved in a list
const thumb=document.querySelectorAll(".demo");

// counter set to 0
let counter=0;

next.addEventListener("click",function(){
    counter++;
    // se counter supera la lunghezza della lista lo resetto 
    if(counter===titlesList.length){
        counter=0;
    }
    title.textContent=titlesList[counter];
    text.textContent=textsList[counter];
    image.src=imgList[counter];
})

prev.addEventListener("click",function(){
    counter--;

    //se counter è più piccolo di zero allora lo porto alla fine della lista 
    if(counter<0){
        counter=titlesList.length-1;
    }
    
    title.textContent=titlesList[counter];
    text.textContent=textsList[counter];
    image.src=imgList[counter];
})


for(let element of thumb){
    element.addEventListener("click",function(){

        //show me some usefull details
        console.log(element.src);
        
        
        // i thought that was briliant
        image.src=element.src;
        
        //till i discovered this
        console.log(element.id)

        title.textContent=titlesList[element.id];
        text.textContent=textsList[element.id];
});
}
