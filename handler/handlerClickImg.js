import { data } from "../app.js";
import { thumbnailIndex } from "../display/thumbnail.js";
import { transformScene } from "../utils/mode.js";

/**
 * Gère les clics sur les miniatures et met à jour la scène
 * @param {HTMLElement} element - L'élément conteneur des miniatures
 * @returns {Function} Fonction de nettoyage pour supprimer l'écouteur d'événements
 */
export default (element) => {
    if (!(element instanceof HTMLElement)) {
        throw new TypeError('L\'argument doit être un élément HTML');
    }

    const handleClick = (e) => {
        const clickedElement = e.target.closest('.container_img');
        if (!clickedElement) return;

        const newIndex = parseInt(clickedElement.dataset.index, 10);
        if (isNaN(newIndex)) {
            console.error('Index invalide dans le dataset');
            return;
        }

     
        document.querySelectorAll('.container_img.selected').forEach(el => {
            el.classList.remove('selected');
        });

        thumbnailIndex.current = newIndex;
        transformScene(data, thumbnailIndex.current);

  
        clickedElement.classList.add('selected');
    };

 
    element.addEventListener("click", handleClick);


    return () => {
        element.removeEventListener("click", handleClick);
    };
};