const atacante = prompt("What is the name of the attacking character?")
const poderDeAtaque = parseFloat(prompt("What is your attack power?"))

const defensor = prompt("What is the name of the defending character?")
let pontosDeVida = parseFloat(prompt("How many life points does he have??"))
const poderDeDefesa = parseFloat(prompt("What is your defense power?"))
const possuiEscudo = prompt("Does he have a shield? (Yes/No)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "No") {
    danoCausado = poderDeAtaque - poderDeDefesa
  } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Yes") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
  }
  
  pontosDeVida -= danoCausado
  
  alert(atacante + " caused " + danoCausado + " points of damage in " + defensor)
alert(
  atacante + "\nattack power: " + poderDeAtaque + "\n\n" +
  defensor + "\nHealth points: " + pontosDeVida +
  "\nDefense power: " + poderDeDefesa + "\nHas shield: " + possuiEscudo
)