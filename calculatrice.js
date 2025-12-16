// const prompt = require("prompt-sync")();


// function additions(){

// let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : "));

// console.log( n1 + n2)
// }
// function soustraction(){
// let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : "))
// console.log (n1 - n2)
// }



// function multiplication(){
//     let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : "))
// console.log (`${n1}*${n2}=${n1 * n2}`)
// }



// function division(){ 
// let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : "))
// if (n2===0){
//     console.log( "ERROR")
// }else{  console.log (n1/n2)
// }
// }


// function puissance(){
//    let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : ")) 
// console.log (n1 ** n2)
// }

// function Racinecarree(){
// let n1=Number(prompt("entre le 1ere nbr: "));
// let n2=Number(prompt("entrer le é eme nbr : ")) ;
// Math.sqrt(n1)
// Math.sqrt(n2)
// } 





// let choix = 0;
// while (choix !== 7) {
//   console.log("\n===== menu =====");
//   console.log("1. Calculer l'addition ");
//   console.log("2. Calculer soustraction");
//   console.log("3. calculer multiplication");
//   console.log("4. calculer division ");
//   console.log("5. calculer puissance");
//   console.log("6. calculer racine carré");
//   console.log("7. Quiter ");
//     choix = parseInt(prompt("Choisissez une option  : "));
//   switch (choix) {
//     case 1:
//       additions();
//       break;

//     case 2:
//       soustraction()
//       break;

//     case 3:
//       multiplication();

//       break;

//     case 4:
//       division();
//       break;

//     case 5:
//       puissance();
//       break;

//     case 6:
//       Racinecarree();
//       break;

//     case 7 :
//       console.log("Au revoir !");
//       break;

//     default:
//       console.log(" Choix invalide !");
//       break;
//   }
// }


const prompt = require("prompt-sync")();
function addition(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "))
console.log(nb1 + nb2)}


function soustraction(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "))
    console.log(nb1 - nb2)
}


function multiplication(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "))
console.log(`${nb1} * ${nb2}=${nb1 *nb2 }`)}


function division(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "));
    if (nb2===0){
    console.log("error")
    }else{console.log(nb1/nb2);
    }
    
}
function puissance(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "));
console.log(nb1**nb2);

}

function racinecarree(){
    let nb1=Number(prompt("entrer un nbr :"));
    let nb2=Number(prompt("entrer un nbr : "));
    console.log(Math.sqrt(nb1));
        console.log(Math.sqrt(nb2));
}


let choix =0;
while (choix!==7) {
    console.log("n\=============menu==========")
    console.log("1.calculer l additon ")
    console.log("2. calculer la soustraction ");
    console.log("3.calculer la multiplication ");
    console.log("4. calculer la division  ");
    console.log("5. calculer la puissance");
    console.log("6. calculer la racinecarree");
    console.log("7.QUITTER");
    choix=Number(prompt("votre choix : "));
    
    switch(choix){
case 1 :
    addition();
    break;
case 2:
    soustraction();
    break;
 case 3 :
    multiplication();
    break;
case 4:
    division();
    break;
case 5 :
    puissance();
    break;
case 6:
    racinecarree();
    break;        
case 7 :
    console.log("au revoir ");
    break;
default:
    console.log("choix invalide ");
    break;
    
}

    }












