const prompt = require("prompt-sync")();
function maxTableau(tab){
     let tableaux=[]
    for (let i=0 ; i<=3 ;i++){
   let nbr =Number(prompt("ecrit un nbr: "));


tableaux.push(nbr);
} 
let max
max=Math.max(...tableaux)

console.log(tableaux)
console.log(max)
    
}
maxTableau();
