"use strict";

(function () { //IIFE

	const tabCouleur = ['#CC231E', '#235E6F' , '#009900', '#34A65F', '#0F8A5F','#F5624D']
	window.addEventListener("load", function () {
		let i = 0;
		//let ensembleDesLettre = document.querySelectorAll(".mot > div")
		let lesLettres = document.querySelectorAll(".mot:nth-child(1) > div")
		let nbLettres = lesLettres.length;
		//Quand la page est chargée, on attribue un délai cumulatif de 0.5s
		//pour débuter l'animation de chaque lettre du mot JOYEUX

		for (let uneLettre of lesLettres){
			
			uneLettre.style.animationDelay = (i * 0.5) + "s";
			uneLettre.style.color = tabCouleur[(i++)%7]
			
		}
	

		//Quand l'animation de la dernière lettre du mot joyeux est terminée la fonction animerNoel est appelée	
		lesLettres[nbLettres - 1].addEventListener("animationend", animerNoel, false);
		console.log('lesLettres[nbLettres - 1]' + lesLettres[nbLettres - 1].innerHTML)
		
		//ICI - C'est uniquement pour afficher le démo de la première partie de l'épreuve à l'écran
		//Après 12 secondes on recharge la page...


		window.setTimeout(function () {
			window.location.reload();
		}, 20000);


	},false)




		function animerNoel(evt) {
		let i=0
		const tabCouleur = ['#CC231E', '#235E6F', '#0F8A5F','#F5624D']
		console.log('animerNoel')
		//On enlève l'écouteur d'événement
		evt.target.removeEventListener("animationend", animerNoel, false);

		//On récupère le mot Noël
		let motNoel = document.querySelectorAll(".mot:nth-child(2) > div");
		console.log('motNoel.length' + motNoel.length)
		//Avec une boucle for of, on attribue à chaque lettre la classe animNoel
		// motNoel.length
		for (let uneLettre of motNoel) {
			uneLettre.classList.add("animNoel");
			uneLettre.style.color = tabCouleur[i++]
		}
		// console.log('motNoel[motNoel.length-1] = ' + motNoel[motNoel.length-1].innerHTML)
		// motNoel[motNoel.length-1].addEventListener('animationend', deplaceDroite, false)

	}; // Fin animerNoel
/*
	function deplaceDroite(evt){
		console.log('passe')
		evt.target.removeEventListener('animationend', deplaceDroite, false)
		let elmSection = document.querySelector('section')
		elmSection.classList.add('glissementDroite')
	}
*/




})() // fin fonction IIFE
