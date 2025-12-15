const prompt = require("prompt-sync")();
nbr=Number(prompt("entrer un nbr : "));
function tableMultipliction(){
for (let i=1;i<=10;i++){
console.log(`${nbr}*${i}=${nbr * i }`)
}
}tableMultipliction();