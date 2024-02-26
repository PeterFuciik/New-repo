//Promises - Asynchrnonní programování 
//Objekt - představuje hodnotu, která je dostupná ihned nebo po dokončení asynchronní operace

function ziskdat() {
    return new Promises ((vyresit, vratit) => {
    //promise - název objektu (může být dle nás)
    //Objekt = obsahuje víe datových typů (příklad: datum, pole více txt řetězců)

    setTimeout(() => {
      const data = "nějaká data";
      callback(data);
      })}, 2000);
}

ziskdat().than((vystup) =>{
    console.log(vystup);
})