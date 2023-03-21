const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdcefghiklmnopqrstuvwxyz1234567890!@#$%^&*"

function Random(item){
let inbox  
let No = ""
for(let i = 0; i< item; i++)
  {
    inbox = Math.floor(Math.random()* Alphabet.length)
   // No += Alphabet[inbox] 
    No = No + Alphabet[inbox]
  }
  return No
}

console.log("Welcome to Programiz!"+ Random(10));
