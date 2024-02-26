// cvičení switch

let a = prompt("zadejte známku")

switch (a) {
  case 1: 
    console.log("Výborná")
  break;

  case 2: 
  console.log("Chvalitebná")
  break;

  case 3: 
  console.log("Dobrá")
  break;

  case 4: 
  console.log("Dostatečná")
  break;

  case 5: 
  console.log("Nedostatečná")
  break;

  default:
  console.log("zadejte číselnou známku od 1 do 5")
}

//-- další cvičení --

let mesic = prompt("zadejte jméno měsíce angicky, čeyk nebo německy")

switch (mesic) {
  
  case "cesky":
    console.log("měsíc")
  break;

  case "anglicky":
    console.log("moon")
  break;

  case ("nemecky"):
    console.log("der mond")
  
  default :
    console.log("zadali jste špatné slovo, napiště 'nemecky' nebo 'anglicky' nebo 'cesky'.")
}
 