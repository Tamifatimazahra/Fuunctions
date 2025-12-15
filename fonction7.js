const prompt = require("prompt-sync")();
tab=[1,2,3,4,5,6];
let produit =1;
function produittableau(tab){
    for(let i=0 ;i<tab.length;i++){
         produit=produit*tab[i];

}
 return produit;
}

 console.log(produittableau(tab));
