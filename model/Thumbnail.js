import { createElement, addAttributes } from "../utils/dom.js";
import handlerClickImg from '../handler/handlerClickImg.js'


export default class Thumbnail {
	/**
	 * @param {Array} arrayURL - Les URL des images pour les miniatures.
	 */
	constructor(arrayURL) {
		if (!Array.isArray(arrayURL)) {
			throw new Error("Passez un tableau en paramètre.");
		}
		this.arrayURL = arrayURL;
		this.serverDirectoryImgs = "https://khayyer.io/dbz-img";
	}

	/**
	 * Crée des éléments DOM représentant les miniatures.
	 * @returns {DocumentFragment} - Un fragment contenant toutes les images miniatures.
	 */
	create() {
		const fragment = document.createDocumentFragment();

		this.arrayURL.forEach((url) => {
			const containerImg = createElement("div");
			const img = createElement("img", containerImg);

			containerImg.classList.add("container_img");

			addAttributes(img, {
				src: `${this.serverDirectoryImgs}/${url}`,
			});

			handlerClickImg(containerImg)
			fragment.appendChild(containerImg);
		});

		return fragment;
	}
}
