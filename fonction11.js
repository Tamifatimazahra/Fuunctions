const prompt = require("prompt-sync")();
function supprimerDoublons(tab){
tab=[1,2,3,4,2,2,3,3,9,8,7]
sansdouble=[...new Set(tab)]
console.log(sansdouble)
}
supprimerDoublons();