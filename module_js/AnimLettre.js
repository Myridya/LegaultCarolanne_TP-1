import {
    Util
} from './Util.js'

// Il faut toujours que le nom de la classe soit la même que le nom du module qu'il représente
export class AnimLettre {
    
    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} motAnime - contient l'ensemble des caractères d'animation
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */
    
    constructor(motAnime, elementParent, fonction) { // fonction autoexecutante
        //Récupérer les valeurs passées en paramètre
        this.motAnime = motAnime
        this.elmParent = elementParent
        this.AnimLettre(this.motAnime)
        this.fonction = fonction
    }

    AnimLettre(motAnime) {
        
        console.log(`motAnime = ${motAnime}`)
        
        let elmConteneur = this.creerElement(this.elmParent,
            'div',
            '',
            'mot')

            for(let i = 0; i<motAnime.length; i++){
                let e = this.creerElement(elmConteneur, 'div', this.motAnime[i], '');
                e.style.animationDelay = (0.5 * i) + 's';
            }

    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }

        if (classCSS != '') { // Permet de se protéger
            noeud.classList.add(classCSS)
        }

        elmParent.appendChild(noeud) // Chaque élément vas être ajouter dans parent (Head)
        return noeud
    }
}