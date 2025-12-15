const prompt = require("prompt-sync")();
function remplirTableau(length)
{
    let tableaux =[];
for (let i=0;i<3;i++){
     let nbr= Number(prompt("entrer un nbr: "))
     tableaux.push(nbr);
}
console.log(tableaux);
}
remplirTableau()
