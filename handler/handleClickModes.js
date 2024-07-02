import { qs } from "../utils/dom.js";
import { transformScene } from "../utils/mode.js";
import { thumbnailIndex } from "../display/thumbnail.js";

let currentMode = "classic"

export default (data) => {
	const modes = qs(".containerModes > div", true);
	for (let i = 0; i < modes.length; i++) {
		modes[i].addEventListener("click", (e) => {
			currentMode = modes[i].classList[1];
            transformScene(data, thumbnailIndex.current)
		});
	}
};

export const getCurrentMode = () => currentMode;

