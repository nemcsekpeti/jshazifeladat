window.addEventListener("load", init);
var kep = [
  {
    cim: "1. kép címe",
    eleresiUt: "kepek/kep1.jpg",
    leiras: "Ez az első kép."
  },
  {
    cim: "2. kép címe",
    eleresiUt: "kepek/kep2.jpg",
    leiras: "Ez a 2. kép."
  },
  {
    cim: "3. kép címe",
    eleresiUt: "kepek/kep3.jpg",
    leiras: "Ez a 3. kép."
  },
];

function ID(elem) 
{
  return document.getElementById(elem);
}

function init() 
{
  ID("uzenet").innerHTML = "<h1>Képgaléria</h1>";
  kiir();
  kiirLeiras();
  divLetrehozas();
}

function kiir() 
{
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt += "<h3>" + kep[index].cim + "</h3>";
  }
  ID("cim").innerHTML = txt;
}

function kiirLeiras()
{
  var txt = "";
  for (let index = 0; index < kep.length; index++) 
  {
    txt+= "<p>" + kep[index].leiras + "<p>";
  }
  ID("leiras").innerHTML = txt;
}

function divLetrehozas()
{
  var txt="";
  for (let index = 0; index < kep.length; index++) 
  {
    txt+="<div id='" + kep[index].eleresiUt + "'>" + "<img src='" + kep[index].eleresiUt + "' alt='" + kep[index].cim + "' >" + "</div>";
  }
  ID("divek").innerHTML = txt;
}