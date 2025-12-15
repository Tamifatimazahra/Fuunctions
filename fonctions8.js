const prompt = require("prompt-sync")();
function moyenne (){
  let  tab=[1,2,3,4,5,6];
let somme=0;
let moyenne

for (let i=1;i<tab.length;i++){

somme+=tab[i];

}

console.log(somme)
moyenne=somme/6
console.log(moyenne)
}
moyenne()
