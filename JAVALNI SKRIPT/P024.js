//callback funkce - asynchroní programování
//fce je předána jako argument, a je zavolána po dokončení operace¨

function ziskdat(callback) {
    setTimeout(() => {  //vytahuje data zevmitř do funkce a volá je níže
      const data = "nějaká data";
      callback(data);
 
    }, 2000);
}

ziskdat((vystup)) => {
    console.log("něco");
}