let index = "";
let test = "";
let beschreibung = "";

let bilder = [
  "0992", 
  "1268", 
  "1957", 
  "2074", 
  "2118", 
  "2205",
  "2324",
  "2420",
  "2559",
  "2622",
  "3267",
  "3893",
  "4140",
  "4227",
  "4279",
  "4489"
];

let bilderBeschreibung = [
  "Einkauszentrum in Bankgok", 
  "Sonnenuntergang am Ao Nang Beach", 
  "Lagoon of Hong island (Flut)", 
  "Lao Lading island", 
  "Lagoon of Hong island (Ebbe)", 
  "Hong island Beach (nur per Kanu erreichbar)", 
  "weißt du noch wo das war? Ich vermute Ao Nang.",
  "Wir ahnen noch nichts von der Feuershow.",
  "Früh aufstehen hat sich gelohnt!",
  "Schattenspiel",
  "Affen!",
  "Etwas zu spät vor Ort, aber trotzdem eine Ewige Erinnerung!",
  "",
  "",
  "Unvergesslicher Strand. Man sieht die kleine Hütte. ;)",
  "Dort oben hattest du ein sehr schönes Kleid an! Der Ausblick war auch atemberaubend. :)"
];

function bildWechseln() {  
  // (44, 48) bei "testing"
  
  index = bilder.indexOf(document.getElementById("bild").src.slice(51, 55))+1;
  beschreibung = bilderBeschreibung[index];
  test = bilder[index];

  console.log(document.getElementById("bild").src.slice(51, 55));

  if (test === undefined) {
    test = bilder[0];
    beschreibung = bilderBeschreibung[0];
  }
  
  document.getElementById("bild").src = `Bilder\\IMG_${test}.JPEG`
  document.getElementById("textSlider").innerText = beschreibung;

  localStorage.setItem("bild", test);
  localStorage.setItem("textSlider", beschreibung);

}

function bilderLaden(){
  if (document.getElementById("bild").value === null || bilder.includes(localStorage.getItem("bild")) === false) {
    document.getElementById("bild").src = "Bilder\\IMG_0992.JPEG";
    document.getElementById("textSlider").innerText = localStorage.getItem("textSlider");
    
  } 
  else {
    document.getElementById("bild").src = `Bilder\\IMG_${localStorage.getItem("bild")}.JPEG`
    document.getElementById("textSlider").innerText = localStorage.getItem("textSlider");
    
  }
  return false;
}
