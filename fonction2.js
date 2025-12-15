const prompt = require("prompt-sync")();
function sommeTableau(){
    let tableaux=[1,2,1,5,6];
   let somme=0
   for(let i=0;i<tableaux.length;i++){
    somme+=tableaux[i]
   }
console.log(somme);
   

}
 
sommeTableau();