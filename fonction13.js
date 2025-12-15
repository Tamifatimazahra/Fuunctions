const prompt = require("prompt-sync")();
function motLongs(){
    mots=["chat","cat","fantastic","philosophie"]
    longemot =mots.filter(mot=>mot.length>10)
    console.log(longemot);
    
}
motLongs();cd 