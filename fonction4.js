// const prompt = require("prompt-sync")();
// function compterOccurences(tab,val){
// // let tab=[1,2,3,4,2,8,2]; 
// let compteur=0;
// // let valeur =2;
//     for (let i=0 ;i<tab.length;i++){
//         if (tab[i]===val){
//             compteur++
//         }
//     }
// return compteur;
// }
// let tab=[1,2,3,4,2,8,2]; 
// let val =2;
// console.log((compterOccurences(tab,val)));


const prompt = require("prompt-sync")();


function compterOccurrences(tab, val) {
    let compteur = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === val) {
            compteur++;
        }
    }
    return compteur;
}

// Saisie de 5 nombres
let tab = [];
for (let i = 0; i < 5; i++) {
    tab.push(parseInt(prompt("Entrer un nombre : ")));
}

let val = parseInt(prompt("Entrer la valeur à chercher : "));

console.log("Nombre d'occurrences :", compterOccurrences(tab, val));
