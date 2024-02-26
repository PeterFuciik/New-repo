function aktualizovatObsah() {
  switch (krokHry) {
    case 1:
      document.getElementById("context").innerHTML =
        "Čas: " + 8 + " hodin";
      document.getElementById("img-box").innerHTML =
        "Gertruda tě pozvala na svou španělskou svatbu v Malaze! Stihneš tam dorazit? Je už zítra ráno! Jak pojedeš na letiště?";
      document.getElementById("moznosti").innerHTML =
        "a) Zavolám si taxi!<br>b) Mám lítačku, pojedu MHD.<br>c) Pojedu svým autem, určitě tam někde zaparkuju.";
      break;
    
      case 2:
      document.getElementById("cas").innerHTML = "Čas: " + 8 + " hodin " + 30 + " minut";
      document.getElementById("otazka").innerHTML =
        "Ani nebyla kolona! Do odletu máš ještě 2.5 hodiny. Co budeš dělat?";
      document.getElementById("moznosti").innerHTML =
        "a) Rovnou projdu kontrolou.<br>b) Ještě mám čas, jdu se najíst.<br>c) Pohoda, zdřímnu si.";
      break;
    
      case 3:
      document.getElementById("cas").innerHTML = "Čas: " + 9 + " hodin";
      document.getElementById("otazka").innerHTML =
        "Prošel jsi kontrolou, našel jsi svůj gate, ale právě oznámili, že letadlo má technické potíže a nepoletí. Co dál?";
      document.getElementById("moznosti").innerHTML =
        "a) Pane bože! Zkusím přebookovat letenku na nejbližší let.<br>b) Cože? Tak to na ně kašlu, pojedu FlixBusem.<br>c) Pojedu vlakem.";
      break;
    // další kroky by se přidaly podle potřeby

    default:
      break;
  }
}

function handleOption(volba) {
  if (krokHry === 1) {
    // Logika pro krok 1
    if (volba === "volbaa") {
      // Logika pro možnost A ve kroku 1
      krokHry = 2; // přechod na krok 2
      aktualizovatObsah();
    }
    // případně další možnosti ve kroku 1
  } else if (krokHry === 2) {
    // Logika pro krok 2
    // Implementace pro možnosti A, B, C ve kroku 2
    if (volba === "volbaa") {
      krokHry = 3; // přechod na krok 3
      aktualizovatObsah();
    }
  } else if (krokHry === 3) {
    // Logika pro krok 3
    // Implementace pro možnosti A, B, C ve kroku 3
  }
  // případně další kroky
}

// Inicializace obsahu na začátku
aktualizovatObsah();

/* texty hra */

/*  Your unit, 505.st marine corpse "RAIDERS" has been issued a rapid deployment protocol 

A)Breacher
B)Marksman
C)JTAC


<!-- HTML !-->
<button class="button-59" role="button">Button 59</button>

/* CSS */