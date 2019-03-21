import {
    Util
} from './Util.js'


export class Content {

    /**
     * Classe permettant de créer et d'animer une section contenant du text
     * @param {object} o - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation   
     }}
     */

    constructor(o, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.titrePrincipal = o.titrePrincipal;
        this.elmParent = elementParent
        this.integrerContent()
        this.fonction = fonction
    }


    integrerContent() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')
        let elmSecondaire = this.creerElement(elmConteneur,
            'div',
            this.titreSecondaire,
            'rectangle')

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
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

        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}