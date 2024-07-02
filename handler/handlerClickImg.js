import { data } from "../app.js";
import { thumbnailIndex } from "../display/thumbnail.js";
import { transformScene } from "../utils/mode.js";

/**
 * @param  {HTMLElement} element
 * @returns {void}
 */

export default (element) => {
	element.addEventListener("click", (e) => {
		thumbnailIndex.current = parseInt(e.target.parentNode.dataset.index);
		transformScene(data, thumbnailIndex.current);
	});
};
