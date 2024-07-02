import { createElement, addAttributes } from "../utils/dom.js";
import handlerClickImg from '../handler/handlerClickImg.js';

export default class Thumbnail {
    /**
     * @param {string[]} arrayURL - Les URL des images pour les miniatures.
     * @param {number} start - Index de début pour le slice du tableau (inclus).
     * @param {number} end - Index de fin pour le slice du tableau (exclus).
     */
    constructor(arrayURL, start = 0, end = arrayURL.length) {
        if (!Array.isArray(arrayURL)) {
            throw new TypeError("Le premier argument doit être un tableau d'URLs.");
        }
        this.arrayURL = arrayURL;
        this.start = Math.max(0, Math.min(start, arrayURL.length));
        this.end = Math.max(this.start, Math.min(end, arrayURL.length));
        this.serverDirectoryImgs = "https://khayyer.io/dbz-img";
    }

    /**
     * Crée un élément image miniature.
     * @param {string} url - L'URL de l'image.
     * @param {number} index - L'index de l'image dans le tableau original.
     * @returns {HTMLElement} - L'élément conteneur de l'image.
     * @private
     */
    _createThumbnailElement(url, index) {
        const containerImg = createElement("div", null, "container_img");
        const img = createElement("img", containerImg);
		addAttributes(img, { 
			loading:"lazy"
		})

        containerImg.dataset.index = this.start + index;
        addAttributes(img, { src: `${this.serverDirectoryImgs}/${url}`, alt: `Thumbnail ${index + 1}` });

        handlerClickImg(containerImg);
        return containerImg;
    }

    /**
     * Crée des éléments DOM représentant les miniatures.
     * @returns {DocumentFragment} - Un fragment contenant toutes les images miniatures.
     */
    create() {
        const fragment = document.createDocumentFragment();

        this.arrayURL.slice(this.start, this.end).forEach((url, index) => {
            const thumbnailElement = this._createThumbnailElement(url, index);
            fragment.appendChild(thumbnailElement);
        });

        return fragment;
    }
}