let land = document.getElementById("länder")
let kurs = document.getElementById("Kurse")
setDateiname()

function setDateiname(){
  document.getElementById("area").innerHTML = getDateiname()
}

function getDateiname(){
  return "Erasmus -" + kurs.value + "- -" + land.value + "- -" + getDate() + "-"
}

function getDate(){
  let date = new Date()
  return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
}

function copyToClipboard() {
  navigator.clipboard.writeText(getDateiname());
}
