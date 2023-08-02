let banderas = ["angola.png", "argentina.jpg", "escocia.png", "filipinas.jpg", "zambia.jpg", "Grecia.png", "italia.png", "rumania.png", "suiza.jpg", "polonia.png"];

let correcta = [1,0,0,2,2,1,1,0,2,0];
let incorrecta = [];
let opciones = [];

opciones.push(["FILIPINAS", "ANGOLA", "REP. DEL CONGO"]);
opciones.push(["ARGENTINA", "URUGUAY", "HONDURAS"]);
opciones.push(["ESCOCIA", "TENERIFE", "REINO UNIDO"]);
opciones.push(["PANAMA", "REP. CHECA", "FILIPINAS"]);
opciones.push(["CAMERUN", "MADAGASCAR", "ZAMBIA"]);
opciones.push(["FINLANDIA", "GRECIA", "URUGUAY"]);
opciones.push(["COST. MARFIL", "ITALIA", "FRANCIA"]);
opciones.push(["RUMANIA", "COLOMBIA", "ISLANDIA"]);
opciones.push(["CANADA", "PERU", "SUIZA"]);
opciones.push(["POLONIA", "PERU", "PORTUGAL"]);

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

function cargarBandera(){
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();
        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas ++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera,1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}