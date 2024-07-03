import Thumbnail from "../model/Thumbnail.js";
import { qs } from "../utils/dom.js";
import { data } from "../app.js";

const carouselThumbnails = document.createElement('div')
const imgCount = qs(".imgCount");
carouselThumbnails.classList.add("carouselThumbnails")


/**
 * Gère les déplacements des miniatures
 */
const thumbnailIndex = {
	partStart: 0,
	partEnd: 5,
	current: 0,
	step: 5,

	next() {
		this.partStart += 5;
		this.partEnd = this.partStart + 5;
		if (this.partEnd > data.length) {
			this.partStart = 0;
			this.partEnd = 5;
		}
	},

	preced() {
		this.partStart -= 5;
		this.partEnd = this.partStart + 5;

		if (this.partStart < 0) {
			this.partEnd = data.length;
			this.partStart = data.length - 5;
		}
	},
};

/**
 * Actualise les miniatures
 * @param {Array} data Tableau des url des images
 * @param {Number} start nombre du début
 * @param {Number} end nombre de fin
 */

const loadThumbnail = (data, start, end) => {
	carouselThumbnails.innerHTML = "";
	const message = `${data.length} image${
		data.length > 1 ? "s enregistrées" : "enregistrée"
	}`;
	const thumbnailInstance = new Thumbnail(data, start, end);
	const fragment = thumbnailInstance.create();

	imgCount.textContent = message;
	carouselThumbnails.appendChild(fragment);
};

/**
 * Affiche les miniatures
 */

export const displayThumbnails = async (data) => {
	qs('.navigation-instructions').insertAdjacentElement('beforebegin', carouselThumbnails)	  

	carouselThumbnails.innerHTML = "";
	loadThumbnail(data, thumbnailIndex.partStart, thumbnailIndex.partEnd);
};

export { loadThumbnail, thumbnailIndex };
