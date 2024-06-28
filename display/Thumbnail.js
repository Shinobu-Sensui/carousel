import FetchFailed from "../error/FetchFailed.js";
import Thumbnail from "../model/Thumbnail.js";
import { createElement, qs } from "../utils/dom.js";

const imgCount = qs('.imgCount')

const carouselThumbnails = createElement(
	"div",
	document.body,
	"carouselThumbnails",
);

const loadThumbnail = (data) => {
	const message = `${data.length} image${data.length > 1 ? "s enregistrées" : "enregistrée"}`
	const thumbnailInstance = new Thumbnail(data.slice(0, 5));
	const fragment = thumbnailInstance.create();

	imgCount.textContent = message
	
	carouselThumbnails.appendChild(fragment);
};


const displayThumbnails = async () => {
	try {
		const response = await fetch("../data/dragonball.json");

		if (!response.ok) {
			throw new FetchFailed();
		}
	
		const imageUrls = await response.json();

		if (imageUrls.length) {
			loadThumbnail(imageUrls);
		}

	} catch (error) {
		console.error("Une erreur est survenue : ", error);
	}
}

displayThumbnails();
