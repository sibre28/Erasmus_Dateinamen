let countries = document.getElementById("Länder")
let kurse = document.getElementById("Kurse")
let unis = document.getElementById("Unis")
let button = document.getElementById("button")
reload_partneruniversities()
setDateiname()

function setDateiname(){
  resetButton()
  document.getElementById("area").innerHTML = "\"" + getDateiname() + "\""
}

function getDateiname(){
  return "Erasmus -" + kurse.value + "- -" + unis.value + "- -" + countries.value + "- -" + getDate() + "-"
}

function afterCountryChanges(){
  reload_partneruniversities()
  setDateiname()
}

function reload_partneruniversities(){
  removeOptions(document.getElementById("Unis"))

  switch(countries.value){
    case "Belgien":
      addUniOption("Universiteit Antwerpen")
      addUniOption("Université Libre de Bruxelles")
      break;
    case  "Dänemark":
      addUniOption("Københavns Universitet")
      break;
    case  "Finnland":
      addUniOption("University of Eastern Finland, Kuopio")
      break;
    case  "Frankreich":
      addUniOption("Université de Caen Normandie")
      addUniOption("Université Catholique de Lille")
      addUniOption("Université de Strasbourg")
      break;
    case  "Griechenland":
      addUniOption("University of Crete, Heraklion")
      addUniOption("Aristotle University of Thessaloniki")
      break;
    case  "Italien":
      addUniOption("Università Politecnica delle Marche, Ancona")
      addUniOption("Università deglis Studi di Bari Aldo Moro")
      addUniOption("Alma Mater Studorium - Università di Bologna")
      addUniOption("Università degli Studi die Napoli Federico III")
      addUniOption("Università degli Studi di Pavia")
      addUniOption("Università degli Studi di Perugia")
      addUniOption("Università di Pisa")
      addUniOption("Sapienza Università di Roma")
      break;
    case  "Österreich":
      addUniOption("Medizinische Universität Graz")
      addUniOption("Medizinische Universität Wien")
      break;
    case  "Polen":
      addUniOption("Jagiellonian University Krakau")
      break;
    case  "Portugal":
      addUniOption("Universidade de Coimbra")
      addUniOption("Universidade de Lisboa")
      break;
    case  "Schweiz":
      addUniOption("Université de Lausanne")
      break;
    case  "Slowenien":
      addUniOption("Universität Ljubljana")
      break;
    case  "Spanien":
      addUniOption("Universitat Internacional de Catalunya, Barcelona")
      addUniOption("Universidad de Granada")
      addUniOption("Universidad de La Laguna")
      addUniOption("Universidad Autónoma de Madrid")
      addUniOption("Universidad de Oviedo")
      addUniOption("Universitat Rovira i Virgili, Reus")
      addUniOption("Universitat de València")
      addUniOption("Universidad de Valladolid")
      addUniOption("Universidad de Zaragoza")
      break;
    case  "Tschechien":
      addUniOption("Charles University Prag - 1st Faculty of Medicine")
      break;
    case  "Türkei":
      addUniOption("Istanbul University Cerrahpasa")
      addUniOption("Marmara University, Istanbul ")
      break;
    case  "Ungarn":
      addUniOption("Semmelweis University Budapest")
      break;
  }

}

function getDate(){
  let date = new Date()
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
}

function copyToClipboard() {
  navigator.clipboard.writeText(getDateiname());
  confirmCopy()
}

function confirmCopy(){
  button.innerText = "Kopiert."
}

function resetButton(){
  button.innerText = "In die Zwischenablage kopieren"
}

function addUniOption(value){
  let option = document.createElement("option")
  option.text = option.value = value;
  unis.add(option)
}

function removeOptions(selectElement) {
  let i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}
