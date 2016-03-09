window.addEventListener('load', function() { //ko se nalozi naredi to funkcijo
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik"); //select vse z clasom opomnik
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var izvediPrijavo = function(event){ //event je ce hocemo s tem se kaj delati(koliko casa traja event,...)
		var ime = document.querySelector("#uporabnisko_ime").value; //select komponento z ID uporabnisko ime in ce je txt field ima atribut value
		document.querySelector("#uporabnik").innerHTML = ime; //ce ni txt field je namesto value innerHTML atribut
		
		document.querySelector(".pokrivalo").style.visibility = "hidden"
	}
	
	//povezi gumb z funkcijo
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo); //ne damo event
	
});