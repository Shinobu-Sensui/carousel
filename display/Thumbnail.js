import FetchFailed from "../error/FetchFailed.js";
import Thumbnail from "../model/Thumbnail.js";
import { createElement } from "../utils/dom.js";

const carouselThumbnails = createElement(
	"div",
	document.body,
	"carouselThumbnails",
);

const displayThumbnails = async () => {
	try {
		const response = await fetch("../data/dragonball.json");

		if (!response.ok) {
			throw new FetchFailed();
		}

		const imageUrls = await response.json();

		if (imageUrls.length) {
			const thumbnailInstance = new Thumbnail(imageUrls);
			const fragment = thumbnailInstance.create();
			carouselThumbnails.appendChild(fragment);
		}
	} catch (error) {
		console.error("Une erreur est survenue : ", error);
	}
};

displayThumbnails();
