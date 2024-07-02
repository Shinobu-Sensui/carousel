import { loadThumbnail, thumbnailIndex } from "../display/thumbnail.js";

export const updateThumbnailOnKeyPress = (data) => {
	document.addEventListener("keydown", (e) => {	
		if (e.key == "ArrowLeft") {
            thumbnailIndex.preced()
			loadThumbnail(data, thumbnailIndex.partStart, thumbnailIndex.partEnd)
		} else if (e.key === "ArrowRight") {
			thumbnailIndex.next()
            loadThumbnail(data, thumbnailIndex.partStart, thumbnailIndex.partEnd)
		}
	});
};
