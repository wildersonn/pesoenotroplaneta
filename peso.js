var mpeso = document.getElementById("tu_peso");
var mplaneta = document.getElementById("tu_planeta");
var boton = document.getElementById("convertir");
boton.addEventListener("click", convertirPeso);
var re = document.getElementById("resultado")

var gravedadtierra = 9.8
var gravedadmarte = 3.7
var gravedadjupiter = 24.8
var peso = 0;
var pesofinal= 0
var planeta =0;

function convertirPeso()
{
  planeta =  parseInt(mplaneta.value);
  peso = parseInt(mpeso.value);
  if (planeta ==1)
  {
    pesofinal= (gravedadmarte * peso / gravedadtierra).toFixed(2)
    planeta = "Marte"
    re.innerHTML = "<center> su peso en la tierra es de   " + peso + "  Kilos <br> y su peso en " + planeta + " es de " + pesofinal + " Kilos <center>"

  }
  else if (planeta ==2)
  {
    pesofinal= (gravedadjupiter * peso / gravedadtierra).toFixed(2)
    planeta = "Jupiter"
    re.innerHTML = "<center> Su peso en la tierra es de   " + peso + " Kilos <br>  y su peso en " + planeta + " es de " + pesofinal + " Kilos <center>"

  }
  else {
    re.innerHTML= "<center>ERROR</center>";
  }



}
