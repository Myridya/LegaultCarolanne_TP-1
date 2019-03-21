
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' //
import {AnimLettre} from './AnimLettre.js' //
import {contenuContent} from './contenuContent.js'// Le contenu de la page suivante


/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmHeader = document.querySelector('.header')
let elmSection = document.querySelector('.content');
let intro = new Introduction(contenuIntro, elmHeader, animationLettre);
let content = new Introduction(contenuContent, elmSection, animationContent);


// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre')
	const lesLettres = 'Veille-technologique' // Elle reste toujours les même puisqu'elles ne sont jamais modifiées par l'animation
 	let  monAnimLettre = new AnimLettre(lesLettres, elmHeader, finAnim)
}


function finAnim()
{
	console.log('animation terminée')
}










	



